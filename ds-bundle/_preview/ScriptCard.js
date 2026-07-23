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

  // .ds-src/previews/ScriptCard.jsx
  var ScriptCard_exports = {};
  __export(ScriptCard_exports, {
    Monopoly: () => Monopoly,
    ZeroLift: () => ZeroLift
  });
  var { ScriptCard } = window.StyleQ;
  function Monopoly() {
    return /* @__PURE__ */ React.createElement(ScriptCard, null, "\u201CWe know a lot of communities feel like they are at the mercy of a monopoly. You only have one option, and the vendor knows it.\u201D");
  }
  function ZeroLift() {
    return /* @__PURE__ */ React.createElement(ScriptCard, null, "\u201CWe know your main goal is an easy customer service tweak that solves problems without creating more work for you.\u201D");
  }
  return __toCommonJS(ScriptCard_exports);
})();
