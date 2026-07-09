import { ImageResponse } from "next/og";

export const alt =
  "StyleQ: on-site salon and spa for senior living communities. Licensed, elder-care-trained stylists, zero lift for staff, no cost to the community.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LEAF = "M0 24c0-16 8-24 24-24 0 16-8 24-24 24z";

// Fraunces is the brand heading font. Fetched once at build time; if the
// network is unavailable the image falls back to a serif font.
async function loadFraunces() {
  try {
    const css = await (
      await fetch(
        "https://fonts.googleapis.com/css2?family=Fraunces:wght@500&display=swap",
        // An older UA makes Google Fonts serve TTF/WOFF, which ImageResponse
        // supports (it cannot parse WOFF2).
        { headers: { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:20.0) Gecko/20100101 Firefox/20.0" } },
      )
    ).text();
    const url = css.match(
      /src:\s*url\((.+?)\)\s*format\(['"](?:truetype|opentype|woff)['"]\)/,
    )?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const fraunces = await loadFraunces();
  // satori crashes on fontFamily: undefined, so fall back to a named family.
  const heading = fraunces ? "Fraunces" : "serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#FDF8F2",
        }}
      >
        {/* Left: brand + message */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "60px 62px",
            position: "relative",
          }}
        >
          {/* Faint decorative leaf, echoing the homepage hero */}
          <svg
            width="150"
            height="150"
            viewBox="0 0 24 24"
            style={{
              position: "absolute",
              bottom: -30,
              left: 30,
              transform: "rotate(-18deg)",
              opacity: 0.5,
            }}
          >
            <path d={LEAF} fill="#F6D4AC" />
          </svg>

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <svg width="34" height="34" viewBox="0 0 24 24">
              <path d={LEAF} fill="#579799" />
            </svg>
            <span
              style={{
                fontFamily: heading,
                fontSize: 44,
                fontWeight: 600,
                color: "#3B3240",
              }}
            >
              StyleQ
            </span>
          </div>

          <span
            style={{
              marginTop: 36,
              fontSize: 19,
              letterSpacing: 4,
              fontWeight: 600,
              color: "#C65B89",
            }}
          >
            ON-SITE SALON &amp; SPA FOR SENIOR LIVING
          </span>

          <span
            style={{
              marginTop: 18,
              fontFamily: heading,
              fontSize: 55,
              lineHeight: 1.12,
              fontWeight: 500,
              color: "#3B3240",
            }}
          >
            Give every resident a spa day, without asking more of your staff
          </span>

          <span
            style={{
              marginTop: 24,
              fontSize: 24,
              lineHeight: 1.45,
              color: "#7C7382",
            }}
          >
            Licensed, elder-care-trained stylists. Zero lift for your team. No
            cost to your community.
          </span>

          <div style={{ display: "flex", marginTop: 32 }}>
            <span
              style={{
                display: "flex",
                backgroundColor: "#C65B89",
                color: "#FFFFFF",
                fontSize: 21,
                fontWeight: 600,
                padding: "14px 30px",
                borderRadius: 999,
              }}
            >
              bookstyleq.com
            </span>
          </div>
        </div>

        {/* Right: gradient brand panel replacing the photo */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: 396,
            height: "100%",
            backgroundImage: "linear-gradient(150deg, #74508F 0%, #C65B89 100%)",
            position: "relative",
          }}
        >
          {/* Oversized watermark leaf */}
          <svg
            width="360"
            height="360"
            viewBox="0 0 24 24"
            style={{
              position: "absolute",
              top: -70,
              right: -90,
              transform: "rotate(135deg)",
              opacity: 0.12,
            }}
          >
            <path d={LEAF} fill="#FFFFFF" />
          </svg>

          <svg width="128" height="128" viewBox="0 0 24 24">
            <path d={LEAF} fill="#FDF8F2" />
          </svg>
          <span
            style={{
              marginTop: 28,
              fontFamily: heading,
              fontSize: 30,
              fontStyle: "italic",
              color: "#FFFFFF",
              textAlign: "center",
              padding: "0 30px",
              lineHeight: 1.3,
            }}
          >
            Beauty in every chapter.
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      ...(fraunces
        ? {
            fonts: [
              { name: "Fraunces", data: fraunces, weight: 500, style: "normal" },
            ],
          }
        : {}),
    },
  );
}
