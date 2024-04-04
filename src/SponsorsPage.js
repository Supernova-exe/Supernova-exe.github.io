"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./css/SponsorsPage.css");
var GoBuilda_png_1 = __importDefault(require("./images/Sponsors/GoBuilda.png"));
var MontgomeryPrinting_png_1 = __importDefault(require("./images/Sponsors/MontgomeryPrinting.png"));
var PrecisionPoint_jpg_1 = __importDefault(require("./images/Sponsors/PrecisionPoint.jpg"));
var Redhat_png_1 = __importDefault(require("./images/Sponsors/Redhat.png"));
var VIAVI_png_1 = __importDefault(require("./images/Sponsors/VIAVI.png"));
var SponsorsPage = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "sponsorsPage", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Sponsors" }), (0, jsx_runtime_1.jsx)("img", { src: GoBuilda_png_1.default, alt: "Go Builda Logo" }), (0, jsx_runtime_1.jsx)("img", { src: MontgomeryPrinting_png_1.default, alt: "Montgomery Printing Logo" }), (0, jsx_runtime_1.jsx)("img", { src: PrecisionPoint_jpg_1.default, alt: "Precision Point Logo" }), (0, jsx_runtime_1.jsx)("img", { src: Redhat_png_1.default, alt: "Redhat Logo" }), (0, jsx_runtime_1.jsx)("img", { src: VIAVI_png_1.default, alt: "VIAVA Logo" })] }));
};
exports.default = SponsorsPage;
