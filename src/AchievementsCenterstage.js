"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./css/Achievements.css");
var Reigonals_jpg_1 = __importDefault(require("./images/Reigonals.jpg"));
var QualOne_jpg_1 = __importDefault(require("./images/QualOne.jpg"));
var AchievementDescription_1 = __importDefault(require("./AchievementDescription"));
var AchievementsCenterstage = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "achievements", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Centerstage Achievements" }), (0, jsx_runtime_1.jsx)(AchievementDescription_1.default, { imgPath: Reigonals_jpg_1.default, title: "Chesapeake Regional Championship", achievements: ["Division Finalist Alliance Captain", "Innovate Award 3rd Place"], inverted: true }), (0, jsx_runtime_1.jsx)(AchievementDescription_1.default, { imgPath: QualOne_jpg_1.default, title: "CHS-MD Park School Baltimore Qualifier Stage Left", achievements: ["Inspire Award 2nd Place", "Think Award Winner", "Winning Alliance 1st Pick"] })] }));
};
exports.default = AchievementsCenterstage;
