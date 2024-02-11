import React from 'react';
import "./Achievements.css";
import OutreachDescription from "./OutreachDescription";
import  Regionals from "./images/Reigonals.jpg";
import QualOne from "./images/QualOne.jpg";

const Achievements : React.FC = () => {
   return(
        <div className="achievements">
             <h1>Achievements</h1>
            <br/>
            <h2>Centerstage</h2>
            <OutreachDescription imgPath={Regionals} title={
                <div style={{width : "100%"}}><h3>Chesapeake Regional Championship</h3>
                    <ul>
                        <li>Division Finalist Alliance Captain</li>
                        <li>Innovate Award 3rd Place</li>
                    </ul></div>
            } inverted/>
            <OutreachDescription imgPath={QualOne} title={
                <div style={{width : "100%"}}><h3>CHS-MD Park School Baltimore Qualifier Stage Left</h3>
                    <ul>
                        <li>Inspire Award 2nd Place</li>
                        <li>Think Award Winner</li>
                        <li>Winning Alliance 1st Pick</li>
                    </ul></div>
            }/>


        </div>
   );
}
export default Achievements;
