import React  from "react";
import OutreachDescription  from "./OutreachDescription";
import BattleOBaltimore from "./images/Outreach/BattleOBaltimore.jpg"
import FTCWorkshops from "./images/Outreach/FTCWorkshops.jpg"
import HelpingInfinity from "./images/Outreach/HelpingInfinity.jpg"
import ExeScrimmageTwo from "./images/Outreach/EXEScrimmageTwo.jpg"
const OutreachPowerplay : React.FC = () => {
    return (
        <div>
            <h1>Powerplay Outreach</h1>
            <OutreachDescription imgPath={BattleOBaltimore} title= "Battle O' Baltimore" inverted/>
            <OutreachDescription imgPath={FTCWorkshops} title= "FTC Workshops"/>
            <OutreachDescription imgPath={HelpingInfinity} title= "Helping Infinity.exe" inverted/>
            <OutreachDescription imgPath={ExeScrimmageTwo} title= "Scrimage with .Exe teams Q-Tech and Orca"/>
        </div>
    )
}
export default OutreachPowerplay;