"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var OutreachDescription_1 = __importDefault(require("./OutreachDescription"));
var BattleOBaltimore_jpg_1 = __importDefault(require("./images/Outreach/BattleOBaltimore.jpg"));
var FTCWorkshops_jpg_1 = __importDefault(require("./images/Outreach/FTCWorkshops.jpg"));
var HelpingInfinity_jpg_1 = __importDefault(require("./images/Outreach/HelpingInfinity.jpg"));
var EXEScrimmageTwo_jpg_1 = __importDefault(require("./images/Outreach/EXEScrimmageTwo.jpg"));
var OutreachPowerplay = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Powerplay Outreach" }), (0, jsx_runtime_1.jsx)(OutreachDescription_1.default, { imgPath: BattleOBaltimore_jpg_1.default, title: "Battle O' Baltimore", inverted: true }), (0, jsx_runtime_1.jsx)(OutreachDescription_1.default, { imgPath: FTCWorkshops_jpg_1.default, title: "FTC Workshops" }), (0, jsx_runtime_1.jsx)(OutreachDescription_1.default, { imgPath: HelpingInfinity_jpg_1.default, title: "Helping Infinity.exe", inverted: true }), (0, jsx_runtime_1.jsx)(OutreachDescription_1.default, { imgPath: EXEScrimmageTwo_jpg_1.default, title: "Scrimage with .Exe teams Q-Tech and Orca" })] }));
};
exports.default = OutreachPowerplay;
