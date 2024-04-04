import React from 'react';
import "./css/Achievements.css";
import OutreachDescription from "./OutreachDescription";
import  Regionals from "./images/Reigonals.jpg";
import QualOne from "./images/QualOne.jpg";
import AchievementDescription from "./AchievementDescription";

const AchievementsCenterstage : React.FC = () => {
   return(
        <div className="achievements">
            <h1>Centerstage Achievements</h1>
            <AchievementDescription imgPath={Regionals} title = "Chesapeake Regional Championship" achievements={["Division Finalist Alliance Captain", "Innovate Award 3rd Place"]} inverted/>
            <AchievementDescription imgPath={QualOne} title= "CHS-MD Park School Baltimore Qualifier Stage Left" achievements={["Inspire Award 2nd Place", "Think Award Winner", "Winning Alliance 1st Pick"]} />
        </div>
   );
}
export default AchievementsCenterstage;
