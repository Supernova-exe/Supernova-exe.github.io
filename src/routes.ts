import routesJson from './routes.json';
import HomePage from "./HomePage";
import ThankYou from "./ThankYou";
import MeetTheTeamPage from "./MeetTheTeamPage";
import OutreachPages from "./OutreachPages";
import OutreachMainPage from "./OutreachMainPage";
import OffSeason24_25 from "./24-25OffSeason";
import OutreachCenterstage from "./OutreachCenterstage";
import CenterStageOffSeason from "./CenterStageOffSeason";
import OutreachPowerplay from "./OutreachPowerplay";
import SponsorsPage from "./SponsorsPage";
import AchievementsMainPage from "./AcheivementsMainPage";
import AchievementsCenterstage from "./AchievementsCenterstage";
import AchievementsPowerplay from "./AchievementsPowerplay";
import RobotMainPage from "./RobotMainPage";
import RobotCenterstage from "./RobotCenterstage";
import RobotPowerplay from "./RobotPowerplay";

const componentMap : any = {
    HomePage,
    ThankYou,
    MeetTheTeamPage,
    OutreachPages,
    OutreachMainPage,
    OffSeason24_25,
    OutreachCenterstage,
    CenterStageOffSeason,
    OutreachPowerplay,
    SponsorsPage,
    AchievementsMainPage,
    AchievementsCenterstage,
    AchievementsPowerplay,
    RobotMainPage,
    RobotCenterstage,
    RobotPowerplay,
};

const routes = routesJson ? routesJson.map(route => ({
    ...route,
    component: componentMap[route.component],
})) : [];

export default routes;