"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./css/TextImageOverlay.css");
var TextImageOverlay = function (_a) {
    var imageUrl = _a.imageUrl, alt = _a.alt, children = _a.children;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "image-container", children: [(0, jsx_runtime_1.jsx)("img", { src: imageUrl, alt: alt }), (0, jsx_runtime_1.jsx)("div", { className: "overlay-content", children: children })] }));
};
exports.default = TextImageOverlay;
