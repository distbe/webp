function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var fileDialog_minExports = {};
var fileDialog_min$2 = {
  get exports() {
    return fileDialog_minExports;
  },
  set exports(v) {
    fileDialog_minExports = v;
  }
};
(function(module, exports) {
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
    return typeof a;
  } : function(a) {
    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  };
  (function(a) {
    var b = function() {
      for (var d = arguments.length, c = Array(d), f = 0; f < d; f++)
        c[f] = arguments[f];
      var g = document.createElement("input");
      return "object" === _typeof(c[0]) && (true === c[0].multiple && g.setAttribute("multiple", ""), void 0 !== c[0].accept && g.setAttribute("accept", c[0].accept)), g.setAttribute("type", "file"), g.style.display = "none", g.setAttribute("id", "hidden-file"), document.body.appendChild(g), new Promise(function(h) {
        g.addEventListener("change", function() {
          h(g.files);
          var l = c[c.length - 1];
          "function" == typeof l && l(g.files), document.body.removeChild(g);
        });
        var j = document.createEvent("MouseEvents");
        j.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null), g.dispatchEvent(j);
      });
    };
    module.exports && (exports = module.exports = b), exports.fileDialog = b;
  })();
})(fileDialog_min$2, fileDialog_minExports);
const fileDialog_min = fileDialog_minExports;
const fileDialog_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: fileDialog_min
}, [fileDialog_minExports]);
export {
  fileDialog_min$1 as f
};
