"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
// routes.ts
var HomePage_1 = __importDefault(require("./HomePage"));
var MeetTheTeamPage_1 = __importDefault(require("./MeetTheTeamPage"));
var OutreachPages_1 = __importDefault(require("./OutreachPages"));
var SponsorsPage_1 = __importDefault(require("./SponsorsPage"));
var OutreachMainPage_1 = __importDefault(require("./OutreachMainPage"));
var OutreachCenterstage_1 = __importDefault(require("./OutreachCenterstage"));
var CenterStageOffSeason_1 = __importDefault(require("./CenterStageOffSeason"));
var AchievementsCenterstage_1 = __importDefault(require("./AchievementsCenterstage"));
var AcheivementsMainPage_1 = __importDefault(require("./AcheivementsMainPage"));
var AchievementsPowerplay_1 = __importDefault(require("./AchievementsPowerplay"));
var OutreachPowerplay_1 = __importDefault(require("./OutreachPowerplay"));
var RobotMainPage_1 = __importDefault(require("./RobotMainPage"));
var RobotCenterstage_1 = __importDefault(require("./RobotCenterstage"));
var RobotPowerplay_1 = __importDefault(require("./RobotPowerplay"));
var _24_25OffSeason_1 = __importDefault(require("./24-25OffSeason"));
var ThankYou_1 = __importDefault(require("./ThankYou"));
exports.routes = [
    { path: "/", component: HomePage_1.default },
    { path: "/thankyou", component: ThankYou_1.default },
    { path: "/meet", component: MeetTheTeamPage_1.default },
    { path: "/outreach", component: OutreachPages_1.default },
    { path: "/outreach/main", component: OutreachMainPage_1.default },
    { path: "/outreach/24-25OffSeason", component: _24_25OffSeason_1.default },
    { path: "/outreach/centerstage", component: OutreachCenterstage_1.default },
    { path: "/outreach/23-24OffSeason", component: CenterStageOffSeason_1.default },
    { path: "/outreach/powerplay", component: OutreachPowerplay_1.default },
    { path: "/sponsors", component: SponsorsPage_1.default },
    { path: "/achievements/main", component: AcheivementsMainPage_1.default },
    { path: "/achievements/centerstage", component: AchievementsCenterstage_1.default },
    { path: "/achievements/powerplay", component: AchievementsPowerplay_1.default },
    { path: "/robots/main", component: RobotMainPage_1.default },
    { path: "/robots/centerstage", component: RobotCenterstage_1.default },
    { path: "/robots/powerplay", component: RobotPowerplay_1.default },
];
