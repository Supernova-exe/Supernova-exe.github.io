import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {HashRouter, Routes, Route} from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "./Layout";
import MeetTheTeamPage from "./MeetTheTeamPage";
import OutreachPages from "./OutreachPages";
import SponsorsPage from "./SponsorsPage";

const App : React.FC = () => {
    const [stickyFooter, setStickyFooter] = useState(true);
    const content = useRef(null);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                if (entry.target === content.current) {
                    if (entry.contentRect.height  < window.innerHeight - 175) {
                        setStickyFooter(true);
                    } else {
                        setStickyFooter(false);
                    }
                }
            }
        });

        if (content.current) {
            resizeObserver.observe(content.current);
        }

        return () => {
            if (content.current) {
                resizeObserver.unobserve(content.current);
            }
        };
    }, []);
    return (
        <div className="App">
            <div ref = {content}>
            <HashRouter>
                <Routes>
                    <Route path="*" element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="meet" element={<MeetTheTeamPage/>}/>
                        <Route path="outreach" element={<OutreachPages/>}/>
                        <Route path="sponsors" element={<SponsorsPage/>}/>
                    </Route>
                </Routes>
            </HashRouter>
        </div>
            <footer style={stickyFooter? {position : "absolute", bottom : "0", width: "100vw"} : {marginTop : "auto"}}>
                <h1>Supernova.exe 21774</h1>
                <p>Email : <a style={{textDecoration: "none", color: "black"}}
                              href="mailto:supernova21774@gmail.com">supernova21774@gmail.com</a></p>
                <p>©2024 Supernova.exe 21774</p>
                <br/>
            </footer>
        </div>
    );
}

export default App;
