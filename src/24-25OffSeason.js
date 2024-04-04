"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./css/OutreachSubPage.css");
var OutreachDescription_1 = __importDefault(require("./OutreachDescription"));
var MarchMadness1_jpg_1 = __importDefault(require("./images/Outreach/MarchMadness1.jpg"));
var FLLStates_jpg_1 = __importDefault(require("./images/Outreach/FLLStates.jpg"));
var OffSeason24_25 = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "outreachSubPage centerStageOffSeason", children: [(0, jsx_runtime_1.jsx)("h1", { children: "24 -25 Off Season Outreach" }), (0, jsx_runtime_1.jsx)(OutreachDescription_1.default, { imgPath: MarchMadness1_jpg_1.default, title: "March Madness" }), (0, jsx_runtime_1.jsx)(OutreachDescription_1.default, { imgPath: FLLStates_jpg_1.default, title: "FLL States", inverted: true })] }));
};
exports.default = OffSeason24_25;
