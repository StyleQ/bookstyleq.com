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

  // .ds-src/previews/Button.jsx
  var Button_exports = {};
  __export(Button_exports, {
    OnGradient: () => OnGradient,
    Outline: () => Outline,
    Primary: () => Primary,
    PrimaryAndSecondary: () => PrimaryAndSecondary,
    Teal: () => Teal
  });
  var { Button } = window.StyleQ;
  function Primary() {
    return /* @__PURE__ */ React.createElement(Button, { variant: "primary" }, "Book a Consultation");
  }
  function Outline() {
    return /* @__PURE__ */ React.createElement(Button, { variant: "outline" }, "Explore Services");
  }
  function Teal() {
    return /* @__PURE__ */ React.createElement(Button, { variant: "teal" }, "Partner with StyleQ");
  }
  function OnGradient() {
    return /* @__PURE__ */ React.createElement("div", { style: { background: "linear-gradient(120deg,#74508F,#C65B89)", padding: 30, borderRadius: 12, display: "inline-block" } }, /* @__PURE__ */ React.createElement(Button, { variant: "on-gradient" }, "Book a Consultation"));
  }
  function PrimaryAndSecondary() {
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12, alignItems: "center" } }, /* @__PURE__ */ React.createElement(Button, { variant: "primary" }, "Book a Consultation"), /* @__PURE__ */ React.createElement(Button, { variant: "outline" }, "Explore Services"));
  }
  return __toCommonJS(Button_exports);
})();
