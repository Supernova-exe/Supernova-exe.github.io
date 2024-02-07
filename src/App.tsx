import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "./Layout";
import MeetTheTeamPage from "./MeetTheTeamPage";
const App : React.FC = () => {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path = "/*" element={<Layout/>}>
            <Route index element = {<HomePage/>}/>
                <Route path = "meet" element = {<MeetTheTeamPage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
