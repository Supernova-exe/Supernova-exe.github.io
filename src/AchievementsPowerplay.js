"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var AchievementDescription_1 = __importDefault(require("./AchievementDescription"));
var BullisQualPowerplay_jpg_1 = __importDefault(require("./images/BullisQualPowerplay.jpg"));
var RegionalsPowerplay_jpg_1 = __importDefault(require("./images/RegionalsPowerplay.jpg"));
var AchievementsPowerplay = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Powerplay Achievements" }), (0, jsx_runtime_1.jsx)(AchievementDescription_1.default, { imgPath: RegionalsPowerplay_jpg_1.default, title: "CHS-MD Regionals", achievements: [], inverted: true }), (0, jsx_runtime_1.jsx)(AchievementDescription_1.default, { imgPath: BullisQualPowerplay_jpg_1.default, title: "CHS-MD Potomac Qualifier", achievements: ["Winning Alliance First Pick", "Think Award 3rd Place"] })] }));
};
exports.default = AchievementsPowerplay;
