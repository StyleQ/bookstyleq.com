/* @ds-bundle: {"namespace":"StyleQ","components":[{"name":"Button","sourcePath":"components/Actions/Button/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/Foundation/Eyebrow/Eyebrow.jsx"},{"name":"NavBar","sourcePath":"components/Navigation/NavBar/NavBar.jsx"},{"name":"Hero","sourcePath":"components/Marketing/Hero/Hero.jsx"},{"name":"AudienceCard","sourcePath":"components/Marketing/AudienceCard/AudienceCard.jsx"},{"name":"Testimonial","sourcePath":"components/Voice/Testimonial/Testimonial.jsx"},{"name":"ScriptCard","sourcePath":"components/Voice/ScriptCard/ScriptCard.jsx"},{"name":"SocialPost","sourcePath":"components/Social/SocialPost/SocialPost.jsx"}],"sourceHashes":{"components/Actions/Button/Button.jsx":"1733976fbb8a","components/Actions/Button/Button.d.ts":"13898c510c4f","components/Actions/Button/Button.prompt.md":"ac359c032845","components/Foundation/Eyebrow/Eyebrow.jsx":"20ca42794467","components/Foundation/Eyebrow/Eyebrow.d.ts":"c15f3300e1dd","components/Foundation/Eyebrow/Eyebrow.prompt.md":"627094bb25eb","components/Navigation/NavBar/NavBar.jsx":"666fdba693f4","components/Navigation/NavBar/NavBar.d.ts":"10a6042415fc","components/Navigation/NavBar/NavBar.prompt.md":"334917888921","components/Marketing/Hero/Hero.jsx":"3b43e6270091","components/Marketing/Hero/Hero.d.ts":"624144230d12","components/Marketing/Hero/Hero.prompt.md":"042ddeffe9b9","components/Marketing/AudienceCard/AudienceCard.jsx":"aa820ab55816","components/Marketing/AudienceCard/AudienceCard.d.ts":"1c93071d99c1","components/Marketing/AudienceCard/AudienceCard.prompt.md":"a8b1e6104112","components/Voice/Testimonial/Testimonial.jsx":"16d7b94d4eb7","components/Voice/Testimonial/Testimonial.d.ts":"fdd1a6246488","components/Voice/Testimonial/Testimonial.prompt.md":"677a554af527","components/Voice/ScriptCard/ScriptCard.jsx":"e6f99a72495a","components/Voice/ScriptCard/ScriptCard.d.ts":"6cf89e1ad4b3","components/Voice/ScriptCard/ScriptCard.prompt.md":"26465f9124b4","components/Social/SocialPost/SocialPost.jsx":"ed6643b39850","components/Social/SocialPost/SocialPost.d.ts":"6e1c10237038","components/Social/SocialPost/SocialPost.prompt.md":"9fe25ef4e0a3"},"inlinedExternals":[],"builtBy":"cc-design-sync"} */
var StyleQ = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // .ds-src/components.jsx
  var components_exports = {};
  __export(components_exports, {
    AudienceCard: () => AudienceCard,
    Button: () => Button,
    Eyebrow: () => Eyebrow,
    Hero: () => Hero,
    NavBar: () => NavBar,
    ScriptCard: () => ScriptCard,
    SocialPost: () => SocialPost,
    Testimonial: () => Testimonial
  });
  var cx = (...xs) => xs.filter(Boolean).join(" ");
  function Button({ variant = "primary", size = "md", children, onClick, type = "button", className, ...rest }) {
    return React.createElement(
      "button",
      {
        type,
        onClick,
        className: cx("sq-btn", `sq-btn--${variant}`, size === "sm" && "sq-btn--sm", className),
        ...rest
      },
      children
    );
  }
  function Eyebrow({ tone = "rose", pill = false, children, className, ...rest }) {
    return React.createElement(
      "span",
      { className: cx("sq-eyebrow", `sq-eyebrow--${tone}`, pill && "sq-eyebrow--pill", className), ...rest },
      children
    );
  }
  function NavBar({ logo = "StyleQ", links = [], cta = "Book a Consultation", onCta }) {
    return React.createElement(
      "nav",
      { className: "sq-nav" },
      React.createElement("span", { className: "sq-nav__logo" }, logo),
      React.createElement(
        "div",
        { className: "sq-nav__links" },
        links.map(
          (l, i) => React.createElement(
            "a",
            {
              key: i,
              className: cx("sq-nav__link", l.active && "sq-nav__link--active", l.soon && "sq-nav__link--soon")
            },
            l.label
          )
        ),
        React.createElement(Button, { size: "sm", variant: "primary", className: "sq-nav__cta", onClick: onCta }, cta)
      )
    );
  }
  function HeroBody({ eyebrow, eyebrowTone = "teal", headline, subhead, primaryCta = "Book a Consultation", secondaryCta = "Explore Services", logo = "StyleQ", links, showNavLinks }) {
    return React.createElement(
      "div",
      { className: "sq-hero__inner" },
      React.createElement(
        "div",
        { className: "sq-hero__nav" },
        React.createElement("span", { className: "sq-hero__logo" }, logo),
        showNavLinks ? React.createElement(
          "div",
          { className: "sq-hero__navlinks" },
          (links ?? ["Services", "For Facilities", "Contact"]).map((l, i) => React.createElement("span", { key: i }, l))
        ) : null,
        React.createElement(Button, { size: "sm", variant: "primary" }, primaryCta)
      ),
      eyebrow ? React.createElement("div", { className: "sq-hero__eyebrow" }, React.createElement(Eyebrow, { tone: eyebrowTone, pill: true }, eyebrow)) : null,
      React.createElement("h1", { className: "sq-hero__h1" }, headline),
      React.createElement("p", { className: "sq-hero__sub" }, subhead),
      React.createElement(
        "div",
        { className: "sq-hero__ctas" },
        React.createElement(Button, { variant: "primary" }, primaryCta),
        React.createElement(Button, { variant: "outline" }, secondaryCta)
      )
    );
  }
  function Hero({ variant = "split", photoLabel = "Resident photography here", ...body }) {
    if (variant === "split") {
      return React.createElement(
        "div",
        { className: "sq-hero" },
        React.createElement(
          "div",
          { className: "sq-hero__split" },
          React.createElement("div", { style: { background: "var(--sq-color-cream)" } }, React.createElement(HeroBody, { ...body, eyebrowTone: body.eyebrowTone ?? "coral", showNavLinks: false })),
          React.createElement("div", { className: "sq-hero__photo" }, photoLabel)
        )
      );
    }
    return React.createElement(
      "div",
      { className: cx("sq-hero", `sq-hero--${variant}`) },
      React.createElement(HeroBody, { ...body, showNavLinks: true })
    );
  }
  var TAG_TONES = {
    teal: { background: "rgba(87,151,153,.15)", color: "#579799" },
    coral: { background: "rgba(246,130,130,.15)", color: "#F68282" },
    rose: { background: "rgba(198,91,137,.12)", color: "#C65B89" }
  };
  function AudienceCard({ name, tag, tagTone = "teal", core, say = [], avoid = [], sample }) {
    return React.createElement(
      "div",
      { className: "sq-audience" },
      React.createElement(
        "div",
        { className: "sq-audience__top" },
        React.createElement("div", { className: "sq-audience__name" }, name),
        tag ? React.createElement("span", { className: "sq-audience__tag", style: TAG_TONES[tagTone] ?? TAG_TONES.teal }, tag) : null
      ),
      core ? React.createElement("p", { className: "sq-audience__core" }, core) : null,
      React.createElement(
        "div",
        { className: "sq-audience__cols" },
        React.createElement(
          "div",
          null,
          React.createElement("div", { className: "sq-audience__collabel" }, "Say"),
          React.createElement("ul", { className: "sq-audience__list sq-audience__list--say" }, say.map((s, i) => React.createElement("li", { key: i }, s)))
        ),
        React.createElement(
          "div",
          null,
          React.createElement("div", { className: "sq-audience__collabel" }, "Avoid"),
          React.createElement("ul", { className: "sq-audience__list sq-audience__list--avoid" }, avoid.map((s, i) => React.createElement("li", { key: i }, s)))
        )
      ),
      sample ? React.createElement("p", { className: "sq-audience__sample" }, sample) : null
    );
  }
  function Testimonial({ label = "Kind Words", quote }) {
    return React.createElement(
      "div",
      { className: "sq-testimonial" },
      React.createElement("span", { className: "sq-testimonial__label" }, label),
      React.createElement("span", { className: "sq-testimonial__quote" }, quote)
    );
  }
  function ScriptCard({ children }) {
    return React.createElement("div", { className: "sq-script" }, children);
  }
  var POST_TAG_TONES = {
    teal: "#579799",
    coral: "#F68282",
    cream: "var(--sq-color-cream)",
    ink: "var(--sq-color-ink)"
  };
  function SocialPost({ variant = "dark", tag, tagTone, headline, sub, stat, footer = "bookstyleq.com", logo = "StyleQ" }) {
    const tagColor = tagTone ? POST_TAG_TONES[tagTone] ?? tagTone : void 0;
    return React.createElement(
      "div",
      { className: cx("sq-post", `sq-post--${variant}`) },
      React.createElement("div", { className: "sq-post__logo" }, logo),
      React.createElement(
        "div",
        { className: "sq-post__body" },
        tag ? React.createElement("div", { className: "sq-post__tag", style: tagColor ? { color: tagColor } : void 0 }, tag) : null,
        stat != null ? React.createElement("div", { className: "sq-post__stat" }, stat) : null,
        headline ? React.createElement("div", { className: "sq-post__headline" }, headline) : null,
        sub ? React.createElement("div", { className: "sq-post__sub" }, sub) : null
      ),
      React.createElement("div", { className: "sq-post__footer" }, footer)
    );
  }
  return __toCommonJS(components_exports);
})();
window.StyleQ=StyleQ;
