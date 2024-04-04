// App.tsx
import React from 'react';
import './css/App.css';
import {HashRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import { routes } from './routes';

const App : React.FC = () => {
    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route path="*" element={<Layout/>}>
                        {routes.map((route, index) => (
                            <Route key={index} path={route.path} element={<route.component />} />
                        ))}
                    </Route>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;