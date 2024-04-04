import React from "react";
import "./css/OutreachSubPage.css"
import OutreachDescription from "./OutreachDescription";
import ScrimmageOne from "./images/Outreach/ScrimmageOne.jpg";
import ScrimmageTwo from "./images/Outreach/ScrimmageTwo.jpg";
import  PieCubedScrimmage from "./images/Outreach/PieCubedScrimmage.jpg";
import RRIScrimmage from "./images/Outreach/RRIScrimmage.jpg";
import NistTour from "./images/Outreach/NistTour.jpg";
import AirplaneConnectHour from "./images/Outreach/AirplaneConnectHour.jpg";
import SecretServiceTour from "./images/Outreach/SecretServiceTour.jpg";
import ScrimmageThree from "./images/Outreach/ScrimmageThree.jpg"
import ViaviConnectHour from "./images/Outreach/ViaviConnectHour.jpg";
import ThurgoodMarshallElementarySteamNight from "./images/Outreach/ThurgoodMarshallElementarySteamNight.jpg"
import MarylandStemFestival from "./images/Outreach/MarylandStemFestival.jpg";
import JohnHopkinsLabTour from "./images/Outreach/JohnHopkinsLabTour.jpg"
import AfganToyDriveOne from "./images/Outreach/AfganToyDriveOne.jpg"
import FTCKickoffEvent from "./images/Outreach/FTCKickoffEvent.jpg"
import EthanBassConnectHour from "./images/Outreach/EthanBassConnectHour.jpg";

const OutreachCenterstage : React.FC = () => {
    return (
        <div className= "outreachSubPage outreachCenterstage">
            <h1>2023 - 2024 Season Outreach </h1>
            <OutreachDescription imgPath={ScrimmageOne} title= "Scrimmage With Gear Rotation, Cryptic, EQ, Orca and Roboo Troopers" inverted/>
            <OutreachDescription imgPath={ScrimmageTwo} title = "Scrimmage With N-1, Blu Cru, EV, and EQ" />
            <OutreachDescription imgPath={PieCubedScrimmage} title = {<h2 style={{width : "100%"}}>PIE<sup>3</sup> Scrimmage</h2>} inverted/>
            <OutreachDescription imgPath={RRIScrimmage} title = "RRI Scrimmage" />
            <OutreachDescription imgPath={NistTour} title = "Tour at NIST" inverted/>
            <OutreachDescription imgPath={AirplaneConnectHour} title = "Connect Hour With Guinness World Record Holder for  Longest Flight of a Paper Airplane" />
            <OutreachDescription imgPath={ScrimmageThree} title = "Scriminge With EQ and Infinity.exe" inverted/>
            <OutreachDescription imgPath={SecretServiceTour} title = "Secret Service Lab Tour" />
            <OutreachDescription imgPath={ViaviConnectHour} title = "Connect Hour With VIAVI Solutions" inverted/>
            <OutreachDescription imgPath={ThurgoodMarshallElementarySteamNight} title = "Steam Night at Thurgood Marshall Elementary School"/>
            <OutreachDescription imgPath={MarylandStemFestival} title = "Event at the Germantown Libray as Part of the Maryland Stem Festival" inverted/>
            <OutreachDescription imgPath={JohnHopkinsLabTour} title = "Lab Tour At John Hopkins" />
            <OutreachDescription imgPath={AfganToyDriveOne} title = "Toy Drive and Robot Demo for Afgan Refugees" inverted/>
            <OutreachDescription imgPath={EthanBassConnectHour} title="Connect Hour with Mr.Ethan Bass"/>
                <OutreachDescription imgPath={FTCKickoffEvent} title= "FTC Kickoff Event" inverted/>
                {/*<OutreachDescription imgPath={MarchMadness} title = "March Madness" />*/}
        </div>
    );
}
export default OutreachCenterstage;
