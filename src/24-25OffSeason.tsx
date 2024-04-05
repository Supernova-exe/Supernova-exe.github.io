import React from 'react';
import "./css/OutreachSubPage.css"
import OutreachDescription from "./OutreachDescription"
import MarchMadness from "./images/Outreach/MarchMadness1.jpg"
import FLLStates from "./images/Outreach/FLLStates.jpg"
import HerbertHooverMStemNight from "./images/Outreach/HerbertHooverMStemNight.jpg"
import WatkinsMillESStemNight from "./images/Outreach/WatkinsMillESStemNight.jpg"
import FLLExplorerExpo2024 from "./images/Outreach/FLLExplorerExpo2024.jpg"
import CeaderGroveESStemNight from "./images/Outreach/CeaderGroveESStemNight.jpg"



const OffSeason24_25 : React.FC = () => {
    return (
        <div className = "outreachSubPage centerStageOffSeason">
            <h1>24 -25 Off Season Outreach</h1>
            <OutreachDescription imgPath={CeaderGroveESStemNight} title="Ceader Grove ES Stem Night" />
            <OutreachDescription imgPath={FLLExplorerExpo2024} title="FLL Explorer Expo" inverted/>
            <OutreachDescription imgPath={WatkinsMillESStemNight} title="Watkins Mill ES Stem Night" />
            <OutreachDescription imgPath={HerbertHooverMStemNight} title="Herbert Hoover MS Stem Night" inverted/>
            <OutreachDescription imgPath={MarchMadness} title= "March Madness" />
            <OutreachDescription imgPath={FLLStates} title= "FLL States" inverted/>
        </div>
    );
}
export default OffSeason24_25;