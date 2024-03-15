import React from "react";
import AchievementDescription from "./AchievementDescription";
import BullisQualPowerplay from "./images/BullisQualPowerplay.jpg";
import RegionalsPowerplay from "./images/RegionalsPowerplay.jpg";

const AchievementsPowerplay : React.FC = () => {
    return (
        <div>
            <h1>Powerplay Achievements</h1>
            <AchievementDescription imgPath={RegionalsPowerplay} title= "CHS-MD Regionals" achievements={[]} inverted/>
            <AchievementDescription imgPath={BullisQualPowerplay} title= "CHS-MD Potomac Qualifier" achievements={["Winning Alliance First Pick", "Think Award 3rd Place"]} />
        </div>
    )
}
export default AchievementsPowerplay;