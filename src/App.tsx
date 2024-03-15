import React from 'react';
import './App.css';
import {HashRouter, Routes, Route, Outlet} from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "./Layout";
import MeetTheTeamPage from "./MeetTheTeamPage";
import OutreachPages from "./OutreachPages";
import SponsorsPage from "./SponsorsPage";
import OutreachMainPage from "./OutreachMainPage";
import OutreachCenterstage from "./OutreachCenterstage";
import CenterStageOffSeason from "./CenterStageOffSeason";
import AchievementsCenterstage from "./AchievementsCenterstage";
import AcheivementsMainPage from "./AcheivementsMainPage";
import AchievementsPowerplay from "./AchievementsPowerplay";
import OutreachPowerplay from "./OutreachPowerplay";
import RobotMainPage from "./RobotMainPage";
import RobotCenterstage from "./RobotCenterstage";
import RobotPowerplay from "./RobotPowerplay";
import OffSeason24_25 from "./24-25OffSeason";


const App : React.FC = () => {

    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route path="*" element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="meet" element={<MeetTheTeamPage/>}/>
                        <Route path="outreach" element={<OutreachPages/>}>
                            <Route path="main" element={<OutreachMainPage/>}/>
                            <Route path= "24-25OffSeason" element={<OffSeason24_25/>}/>
                            <Route path="centerstage" element={<OutreachCenterstage/>}/>
                            <Route path= "23-24OffSeason" element={<CenterStageOffSeason/>}/>
                            <Route path="powerplay" element={<OutreachPowerplay/>}/>
                        </Route>
                        <Route path="sponsors" element={<SponsorsPage/>}/>
                        <Route path = "achievements" element={<Outlet/>}>
                            <Route path="main" element={<AcheivementsMainPage/>}/>
                            <Route path="centerstage" element={<AchievementsCenterstage/>}/>
                            <Route path="powerplay" element={<AchievementsPowerplay/>}/>
                        </Route>
                        <Route path="robots" element={<Outlet/>}>
                            <Route path="main" element={<RobotMainPage/>}/>
                            <Route path="centerstage" element={<RobotCenterstage/>}/>
                            <Route path="powerplay" element={<RobotPowerplay/>}/>
                        </Route>
                    </Route>
                </Routes>
            </HashRouter>

        </div>
    );
}

export default App;
