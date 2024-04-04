import React from 'react';
import "./css/OutreachSubPage.css"
import OutreachDescription from "./OutreachDescription"
import MarchMadness from "./images/Outreach/MarchMadness1.jpg"
import FLLStates from "./images/Outreach/FLLStates.jpg"



const OffSeason24_25 : React.FC = () => {
    return (
        <div className = "outreachSubPage centerStageOffSeason">
            <h1>24 -25 Off Season Outreach</h1>
            <OutreachDescription imgPath={MarchMadness} title= "March Madness" />
            <OutreachDescription imgPath={FLLStates} title= "FLL States" inverted/>



        </div>
    );
}
export default OffSeason24_25;