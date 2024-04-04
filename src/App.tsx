import React from 'react';
import './css/App.css';
import {Routes, Route, HashRouter} from "react-router-dom";
import Layout from "./Layout";
import routes from './routes';

const App : React.FC = () => {
    return (
        <div className="App">
            <HashRouter>
                <Layout>
                    <Routes>
                        {routes.map((route, index) => (
                            <Route key={index} path={route.path} element={<route.component />} />
                        ))}
                    </Routes>
                </Layout>
            </HashRouter>
        </div>
    );
}

export default App;