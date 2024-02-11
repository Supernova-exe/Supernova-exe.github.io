import React from 'react';
import "./OutreachSubPage.css"
import OutreachDescription from "./OutreachDescription"
import AfganToyDriveTwo from "./images/Outreach/AfganToyDriveTwo.jpg";
import NOAAConnectHour from "./images/Outreach/NOAAConnectHour.jpg";
import SummerGame from "./images/Outreach/SummerGame.jpg";
import NationalNightOut from "./images/Outreach/NationalNightOut.jpg";
import FoxChapelStemNight from "./images/Outreach/FoxChapelStemNight.jpg";
import FLLExplorerExpo from "./images/Outreach/FLLExplorerExpo.jpg"
import MarchMadness from "./images/Outreach/MarchMadness.jpg"

const CenterStageOffSeason : React.FC = () => {
    return (
        <div className = "outreachSubPage centerStageOffSeason">
            <h1>23-24 Off Season Outreach</h1>
            <OutreachDescription imgPath={AfganToyDriveTwo} title= "Toy Drive and Robot Demo for Afgan Refugees" inverted/>
            <OutreachDescription imgPath={NOAAConnectHour} title= "Connect Hour With Mr. Jeremy Warren From NOAA"/>
            <OutreachDescription imgPath={SummerGame} title= "Summer Game" inverted/>
            <OutreachDescription imgPath={NationalNightOut} title= "National Night Out" />
            <OutreachDescription imgPath={FLLExplorerExpo} title= "FLL Explorer Expo" inverted/>
            <OutreachDescription imgPath={FoxChapelStemNight} title= "Stem Night at Fox Chapel Elementry School"/>
            <OutreachDescription imgPath={MarchMadness} title= "March Madness" inverted/>



        </div>
    );
}
export default CenterStageOffSeason;