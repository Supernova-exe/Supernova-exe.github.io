"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./css/OutreachDescription.css");
var OutreachDescription = function (_a) {
    var imgPath = _a.imgPath, title = _a.title, inverted = _a.inverted;
    if (inverted) {
        return ((0, jsx_runtime_1.jsxs)("div", { className: "outreachDescription inverted", children: [(0, jsx_runtime_1.jsx)("h2", { children: title }), (0, jsx_runtime_1.jsx)("img", { src: imgPath, alt: "Outreach" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "outreachDescription", children: [(0, jsx_runtime_1.jsx)("img", { src: imgPath, alt: "Image of ".concat(title) }), (0, jsx_runtime_1.jsx)("h2", { children: title })] }));
};
exports.default = OutreachDescription;
