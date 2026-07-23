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

  // .ds-src/previews/Eyebrow.jsx
  var Eyebrow_exports = {};
  __export(Eyebrow_exports, {
    Coral: () => Coral,
    PillCoral: () => PillCoral,
    PillTeal: () => PillTeal,
    Rose: () => Rose,
    Teal: () => Teal
  });
  var { Eyebrow } = window.StyleQ;
  function Rose() {
    return /* @__PURE__ */ React.createElement(Eyebrow, { tone: "rose" }, "Brand identity");
  }
  function Teal() {
    return /* @__PURE__ */ React.createElement(Eyebrow, { tone: "teal" }, "Licensed & insured");
  }
  function Coral() {
    return /* @__PURE__ */ React.createElement(Eyebrow, { tone: "coral" }, "Kind words");
  }
  function PillTeal() {
    return /* @__PURE__ */ React.createElement(Eyebrow, { tone: "teal", pill: true }, "On-site salon & spa for senior living");
  }
  function PillCoral() {
    return /* @__PURE__ */ React.createElement(Eyebrow, { tone: "coral", pill: true }, "On-site salon & spa for senior living");
  }
  return __toCommonJS(Eyebrow_exports);
})();
