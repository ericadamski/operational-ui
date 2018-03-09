"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var glamor_1 = require("glamor");
var color_1 = require("./color");
exports.baseStylesheet = function (theme) { return "\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: " + theme.fontFamily + ";\n  font-size: 13px;\n  height: 100%;\n}\n\nbody {\n  background-color: " + theme.colors.background + ";\n}\n\na:link,\na:visited {\n  color: " + theme.colors.info + ";\n}\n\na:hover: {\n  color: " + color_1.darken(theme.colors.info, 5) + ";\n}\n"; };
exports.injectStylesheet = function (cssString) {
    if (!document) {
        return;
    }
    var styleEl = document.createElement("style");
    styleEl.innerHTML = cssString;
    document.head.appendChild(styleEl);
};
exports.fadeIn = glamor_1.css.keyframes({
    from: {
        opacity: 0,
        transform: "translate3d(0, -6px, 0)"
    },
    to: {
        opacity: 1,
        transform: "translate3d(0, 0, 0)"
    }
});
exports.resetTransform = glamor_1.css.keyframes({
    to: {
        transform: "none"
    }
});
exports.spin = glamor_1.css.keyframes({
    from: {
        transform: "rotate(0deg)"
    },
    to: {
        transform: "rotate(359deg)"
    }
});
//# sourceMappingURL=styles.js.map