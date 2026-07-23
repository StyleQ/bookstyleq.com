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

  // .ds-src/previews/SocialPost.jsx
  var SocialPost_exports = {};
  __export(SocialPost_exports, {
    DarkPainPoint: () => DarkPainPoint,
    GradientClose: () => GradientClose,
    LightSolution: () => LightSolution,
    StatCard: () => StatCard,
    TealProof: () => TealProof
  });
  var { SocialPost } = window.StyleQ;
  function DarkPainPoint() {
    return /* @__PURE__ */ React.createElement(
      SocialPost,
      {
        variant: "dark",
        tag: "The Chokehold Problem",
        tagTone: "teal",
        headline: "\u201CYou have one option, and you\u2019re at their mercy.\u201D",
        sub: "Sound familiar? There\u2019s a better way to run salon days."
      }
    );
  }
  function LightSolution() {
    return /* @__PURE__ */ React.createElement(
      SocialPost,
      {
        variant: "light",
        tag: "The Only Filter That Matters",
        tagTone: "teal",
        headline: "Does this create work \u2014 or solve problems?"
      }
    );
  }
  function TealProof() {
    return /* @__PURE__ */ React.createElement(
      SocialPost,
      {
        variant: "teal",
        tag: "Zero Lift For Your Team",
        headline: "We handle scheduling, supplies, and every stylist relationship \u2014 your staff doesn\u2019t lift a finger."
      }
    );
  }
  function StatCard() {
    return /* @__PURE__ */ React.createElement(
      SocialPost,
      {
        variant: "light",
        stat: "60",
        sub: "days notice is your window. We\u2019ll help you plan your pilot before it opens."
      }
    );
  }
  function GradientClose() {
    return /* @__PURE__ */ React.createElement(
      SocialPost,
      {
        variant: "gradient",
        tag: "Start Small, See Fast",
        headline: "Pilot in your most acute unit. No contract required to start.",
        footer: "Book a Consultation \u2192 bookstyleq.com"
      }
    );
  }
  return __toCommonJS(SocialPost_exports);
})();
