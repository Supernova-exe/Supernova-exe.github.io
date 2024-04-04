// routes.ts
import HomePage from "./HomePage";
import MeetTheTeamPage from "./MeetTheTeamPage";
import OutreachPages from "./OutreachPages";
import SponsorsPage from "./SponsorsPage";
import OutreachMainPage from "./OutreachMainPage";
import OutreachCenterstage from "./OutreachCenterstage";
import CenterStageOffSeason from "./CenterStageOffSeason";
import AchievementsCenterstage from "./AchievementsCenterstage";
import AchievementsMainPage from "./AcheivementsMainPage";
import AchievementsPowerplay from "./AchievementsPowerplay";
import OutreachPowerplay from "./OutreachPowerplay";
import RobotMainPage from "./RobotMainPage";
import RobotCenterstage from "./RobotCenterstage";
import RobotPowerplay from "./RobotPowerplay";
import OffSeason24_25 from "./24-25OffSeason";
import ThankYou from "./ThankYou";
import React from "react";

interface Route {
    path: string;
    component: React.FC;

}
 export const routes : Route[] = [
    { path: "/", component: HomePage },
    { path: "/thankyou", component: ThankYou },
    { path: "/meet", component: MeetTheTeamPage },
    { path: "/outreach", component: OutreachPages },
    { path: "/outreach/main", component: OutreachMainPage },
    { path: "/outreach/24-25OffSeason", component: OffSeason24_25 },
    { path: "/outreach/centerstage", component: OutreachCenterstage },
    { path: "/outreach/23-24OffSeason", component: CenterStageOffSeason },
    { path: "/outreach/powerplay", component: OutreachPowerplay },
    { path: "/sponsors", component: SponsorsPage },
    { path: "/achievements/main", component: AchievementsMainPage },
    { path: "/achievements/centerstage", component: AchievementsCenterstage },
    { path: "/achievements/powerplay", component: AchievementsPowerplay },
    { path: "/robots/main", component: RobotMainPage },
    { path: "/robots/centerstage", component: RobotCenterstage },
    { path: "/robots/powerplay", component: RobotPowerplay },
];