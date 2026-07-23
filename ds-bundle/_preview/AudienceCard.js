var window = window || {};
window.__dsPreview = (() => {
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

  // .ds-src/previews/AudienceCard.jsx
  var AudienceCard_exports = {};
  __export(AudienceCard_exports, {
    Administrator: () => Administrator,
    ResidentFamily: () => ResidentFamily
  });
  var { AudienceCard } = window.StyleQ;
  function Administrator() {
    return /* @__PURE__ */ React.createElement(
      AudienceCard,
      {
        name: "The Administrator",
        tag: "Reliability register",
        tagTone: "teal",
        core: "The economic buyer. Judges every vendor by one filter: does this create work or solve problems? Speak to calm operations, zero lift for staff, and a risk-free pilot.",
        say: ["Zero lift for your team", "Does this solve problems?", "Start with a pilot", "Separate invoicing"],
        avoid: ["Beauty brand language", "Coral / consumer warmth", "Long-term contract first", "More work for nurses"],
        sample: "We aren\u2019t here to create more work for your billing department."
      }
    );
  }
  function ResidentFamily() {
    return /* @__PURE__ */ React.createElement(
      AudienceCard,
      {
        name: "Residents & Families",
        tag: "Warmth register",
        tagTone: "coral",
        core: "The emotional audience. They want to feel seen and cared for. Lead with dignity and the quiet relief of someone looking like themselves again.",
        say: ["She looks like herself again", "Spa-quality care on site", "Unhurried and gentle", "Trained for senior care"],
        avoid: ["Clinical / vendor tone", "Rushed \u201Cassembly line\u201D", "Teal on a CTA button", "Pressure to commit"],
        sample: "She looks like herself again \u2014 that means everything."
      }
    );
  }
  return __toCommonJS(AudienceCard_exports);
})();
