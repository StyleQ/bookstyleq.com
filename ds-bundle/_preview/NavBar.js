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

  // .ds-src/previews/NavBar.jsx
  var NavBar_exports = {};
  __export(NavBar_exports, {
    Default: () => Default
  });
  var { NavBar } = window.StyleQ;
  function Default() {
    return /* @__PURE__ */ React.createElement(
      NavBar,
      {
        links: [
          { label: "Services", active: true },
          { label: "For Facilities" },
          { label: "Contact" }
        ]
      }
    );
  }
  return __toCommonJS(NavBar_exports);
})();
