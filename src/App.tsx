import React from 'react';
import './App.css';
import {HashRouter, Routes, Route} from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "./Layout";
import MeetTheTeamPage from "./MeetTheTeamPage";
import OutreachPage from "./OutreachPage";
import SponsorsPage from "./SponsorsPage";

const App : React.FC = () => {
    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route path="*" element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="meet" element={<MeetTheTeamPage/>}/>
                        <Route path="outreach" element={<OutreachPage/>}/>
                        <Route path="sponsors" element={<SponsorsPage/>}/>
                    </Route>
                </Routes>
            </HashRouter>
            <br/><br/><br/>
        </div>
    );
}

export default App;
