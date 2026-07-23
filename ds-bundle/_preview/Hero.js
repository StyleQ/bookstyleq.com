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

  // .ds-src/previews/Hero.jsx
  var Hero_exports = {};
  __export(Hero_exports, {
    Centered: () => Centered,
    PeachBreak: () => PeachBreak,
    Split: () => Split
  });
  var { Hero } = window.StyleQ;
  var COPY = {
    eyebrow: "On-site salon & spa for senior living",
    headline: "Give every resident a spa day without asking more of your staff.",
    subhead: "StyleQ partners with senior living communities to bring licensed, elder care-trained stylists on site. Your residents get the spa-quality hair, nails, and grooming care they love, and your team doesn\u2019t lift a finger."
  };
  function Split() {
    return /* @__PURE__ */ React.createElement(Hero, { variant: "split", ...COPY });
  }
  function Centered() {
    return /* @__PURE__ */ React.createElement(Hero, { variant: "centered", eyebrowTone: "teal", ...COPY });
  }
  function PeachBreak() {
    return /* @__PURE__ */ React.createElement(Hero, { variant: "peach", eyebrowTone: "rose", ...COPY });
  }
  return __toCommonJS(Hero_exports);
})();
