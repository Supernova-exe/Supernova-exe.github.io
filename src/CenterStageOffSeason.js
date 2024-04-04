"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./css/OutreachSubPage.css");
var OutreachDescription_1 = __importDefault(require("./OutreachDescription"));
var AfganToyDriveTwo_jpg_1 = __importDefault(require("./images/Outreach/AfganToyDriveTwo.jpg"));
var NOAAConnectHour_jpg_1 = __importDefault(require("./images/Outreach/NOAAConnectHour.jpg"));
var SummerGame_jpg_1 = __importDefault(require("./images/Outreach/SummerGame.jpg"));
var NationalNightOut_jpg_1 = __importDefault(require("./images/Outreach/NationalNightOut.jpg"));
var FoxChapelStemNight_jpg_1 = __importDefault(require("./images/Outreach/FoxChapelStemNight.jpg"));
var FLLExplorerExpo_jpg_1 = __importDefault(require("./images/Outreach/FLLExplorerExpo.jpg"));
var MarchMadness_jpg_1 = __importDefault(require("./images/Outreach/MarchMadness.jpg"));
var CenterStageOffSeason = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "outreachSubPage centerStageOffSeason", children: [(0, jsx_runtime_1.jsx)("h1", { children: "23-24 Off Season Outreach" }), (0, jsx_runtime_1.jsx)(OutreachDescription_1.default, { imgPath: AfganToyDriveTwo_jpg_1.default, title: "Toy Drive and Robot Demo for Afgan Refugees", inverted: true }), (0, jsx_runtime_1.jsx)(OutreachDescription_1.default, { imgPath: NOAAConnectHour_jpg_1.default, title: "Connect Hour With Mr. Jeremy Warren From NOAA" }), (0, jsx_runtime_1.jsx)(OutreachDescription_1.default, { imgPath: SummerGame_jpg_1.default, title: "Summer Game", inverted: true }), (0, jsx_runtime_1.jsx)(OutreachDescription_1.default, { imgPath: NationalNightOut_jpg_1.default, title: "National Night Out" }), (0, jsx_runtime_1.jsx)(OutreachDescription_1.default, { imgPath: FLLExplorerExpo_jpg_1.default, title: "FLL Explorer Expo", inverted: true }), (0, jsx_runtime_1.jsx)(OutreachDescription_1.default, { imgPath: FoxChapelStemNight_jpg_1.default, title: "Stem Night at Fox Chapel Elementry School" }), (0, jsx_runtime_1.jsx)(OutreachDescription_1.default, { imgPath: MarchMadness_jpg_1.default, title: "March Madness", inverted: true })] }));
};
exports.default = CenterStageOffSeason;
