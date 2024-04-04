"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./css/RobotPage.css");
var RobotPowerplay_jpg_1 = __importDefault(require("./images/RobotPowerplay.jpg"));
var RobotCenterstage = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "robotPage centerstageRobot", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Powerplay Robot" }), (0, jsx_runtime_1.jsx)("img", { src: RobotPowerplay_jpg_1.default, alt: "Imgage of Hydrogen Nova, our robot from Powerplay" }), (0, jsx_runtime_1.jsx)("h2", { children: "This is Hydrogen Nova, our robot from the Powerplay season" })] }));
};
exports.default = RobotCenterstage;
