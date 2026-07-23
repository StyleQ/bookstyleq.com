"use client";

// A soft, smoky "ink bloom" the way the Problem section's texture reads in the
// Pencil design: an organic floral wisp in the brand rose/plum, densest toward
// the top-right and dissolving down-left. Built with a domain-warped fbm shader
// (the classic Inigo Quilez cloud/marble technique) rather than a static PNG, so
// it sits on a transparent canvas and composites over the cream panel behind it.
// Matches Threads.js conventions: ogl, capped render size, visibility pausing,
// and a single static frame for prefers-reduced-motion.

import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";

const vertexShader = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uCore;
uniform vec3 uMid;
uniform vec3 uEdge;
uniform vec2 uAnchor;
uniform float uIntensity;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 6; i++) {
    v += a * noise(p);
    p = m * p;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / iResolution.xy;
  float aspect = iResolution.x / iResolution.y;

  // Stretch the sample space so the bloom trails sideways like drifting ink.
  vec2 sp = vec2(uv.x * aspect * 2.1, uv.y * 3.1);
  float t = iTime * 0.02;

  // Domain-warped fbm: the soft, cloudy watercolor bloom.
  vec2 q = vec2(fbm(sp + t), fbm(sp + vec2(5.2, 1.3) - t * 0.8));
  vec2 r = vec2(
    fbm(sp + 3.0 * q + vec2(1.7, 9.2) + 0.15 * t),
    fbm(sp + 3.0 * q + vec2(8.3, 2.8) - 0.12 * t)
  );
  float f = fbm(sp + 3.5 * r);

  float d = smoothstep(0.36, 1.0, f + 0.32 * length(r));

  // Concentrate the bloom toward the anchor (top-right), fading out elsewhere.
  float dist = distance(uv, uAnchor);
  float region = 1.0 - smoothstep(0.06, 0.62, dist);

  float density = pow(clamp(d * region, 0.0, 1.0), 1.35);

  // Soft mauve edges -> rose -> a gentle (not dark) plum core.
  vec3 col = mix(uEdge, uMid, smoothstep(0.12, 0.6, density));
  col = mix(col, uCore, smoothstep(0.55, 0.96, density) * smoothstep(0.4, 0.9, region));

  float alpha = density * uIntensity;
  // Premultiplied alpha: the canvas composites premultiplied (see Renderer +
  // blendFunc below), so multiply the color by alpha here. Straight alpha here
  // washes out in Safari, which composites premultiplied strictly.
  gl_FragColor = vec4(col * alpha, alpha);
}
`;

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16) / 255,
    parseInt(h.slice(2, 4), 16) / 255,
    parseInt(h.slice(4, 6), 16) / 255,
  ];
}

export default function InkBloom({
  core = "#8f6ea6",
  mid = "#cf83a8",
  edge = "#ead2e4",
  anchor = [0.92, 0.82],
  intensity = 0.78,
  className = "",
  ...rest
}) {
  const containerRef = useRef(null);
  const animationFrameId = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new Renderer({ alpha: true, premultipliedAlpha: true });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    // Premultiplied "over" blending, paired with the premultiplied color the
    // shader outputs. Renders identically in Chrome and Safari.
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.canvas.style.display = "block";
    container.appendChild(gl.canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: [gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height],
        },
        uCore: { value: hexToRgb(core) },
        uMid: { value: hexToRgb(mid) },
        uEdge: { value: hexToRgb(edge) },
        uAnchor: { value: [anchor[0], anchor[1]] },
        uIntensity: { value: intensity },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    // A fixed timestamp for a pleasant static frame (reduced motion / resizes).
    const STATIC_T = 1800;

    function draw(t) {
      program.uniforms.iTime.value = t * 0.001;
      renderer.render({ scene: mesh });
    }

    const MAX_RENDER_DIM = 1600;
    function resize() {
      const { clientWidth, clientHeight } = container;
      if (!clientWidth || !clientHeight) return;
      const baseDpr = Math.min(window.devicePixelRatio || 1, 2);
      const longestSide = Math.max(clientWidth, clientHeight) * baseDpr;
      const dpr =
        longestSide > MAX_RENDER_DIM
          ? (baseDpr * MAX_RENDER_DIM) / longestSide
          : baseDpr;
      renderer.dpr = dpr;
      renderer.setSize(clientWidth, clientHeight);
      program.uniforms.iResolution.value = [
        gl.canvas.width,
        gl.canvas.height,
        gl.canvas.width / gl.canvas.height,
      ];
      if (prefersReduced) draw(STATIC_T);
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    window.addEventListener("resize", resize);
    resize();

    let isVisible = true;
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0 },
    );
    intersectionObserver.observe(container);

    function loop(t) {
      animationFrameId.current = requestAnimationFrame(loop);
      if (!isVisible || document.hidden) return;
      draw(t);
    }

    if (prefersReduced) {
      draw(STATIC_T);
    } else {
      animationFrameId.current = requestAnimationFrame(loop);
    }

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("resize", resize);
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={containerRef} className={`h-full w-full ${className}`} {...rest} />
  );
}
