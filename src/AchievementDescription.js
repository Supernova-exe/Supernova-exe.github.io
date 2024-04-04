"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var OutreachDescription_1 = __importDefault(require("./OutreachDescription"));
var AchievementDescription = function (_a) {
    var imgPath = _a.imgPath, title = _a.title, achievements = _a.achievements, inverted = _a.inverted;
    return ((0, jsx_runtime_1.jsx)(OutreachDescription_1.default, { imgPath: imgPath, title: (0, jsx_runtime_1.jsxs)("div", { style: { width: "100%" }, children: [(0, jsx_runtime_1.jsx)("h3", { children: title }), (0, jsx_runtime_1.jsx)("ul", { style: { listStyle: "none" }, children: achievements.map(function (achievement, index) {
                        return (0, jsx_runtime_1.jsx)("li", { children: achievement }, index);
                    }) })] }), inverted: inverted }));
};
exports.default = AchievementDescription;
