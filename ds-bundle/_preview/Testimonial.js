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

  // .ds-src/previews/Testimonial.jsx
  var Testimonial_exports = {};
  __export(Testimonial_exports, {
    Default: () => Default,
    LookedForwardTo: () => LookedForwardTo
  });
  var { Testimonial } = window.StyleQ;
  function Default() {
    return /* @__PURE__ */ React.createElement(Testimonial, { quote: "\u201CShe looks like herself again \u2014 that means everything.\u201D" });
  }
  function LookedForwardTo() {
    return /* @__PURE__ */ React.createElement(Testimonial, { label: "From a family", quote: "\u201CMy mother actually looks forward to salon day now.\u201D" });
  }
  return __toCommonJS(Testimonial_exports);
})();
