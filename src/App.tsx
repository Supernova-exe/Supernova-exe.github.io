import React from 'react';
import './App.css';
import {HashRouter, Routes, Route} from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "./Layout";
import MeetTheTeamPage from "./MeetTheTeamPage";
import OutreachPages from "./OutreachPages";
import SponsorsPage from "./SponsorsPage";
import OutreachMainPage from "./OutreachMainPage";
import OutreachCenterstage from "./OutreachCenterstage";
import CenterStageOffSeason from "./CenterStageOffSeason";
import Achievements from "./Achievements";


const App : React.FC = () => {

    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route path="*" element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="meet" element={<MeetTheTeamPage/>}/>
                        <Route path="outreach" element={<OutreachPages/>}>
                            <Route index element={<OutreachMainPage/>}/>
                            <Route path="main" element={<OutreachMainPage/>}/>
                            <Route path="centerstage" element={<OutreachCenterstage/>}/>
                            <Route path="23-24" element={<OutreachCenterstage/>}/>
                            <Route path="centersatgeOffseason" element={<CenterStageOffSeason/>}/>
                            <Route path= "23-24OffSeason" element={<CenterStageOffSeason/>}/>
                        </Route>
                        <Route path="sponsors" element={<SponsorsPage/>}/>
                        <Route path = "achievements" element={<Achievements/>}/>
                    </Route>
                </Routes>
            </HashRouter>

        </div>
    );
}

export default App;
