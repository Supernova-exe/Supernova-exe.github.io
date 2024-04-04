import React from 'react';
import "./css/RobotPage.css";
import PowerplayImage from "./images/RobotPowerplay.jpg";

const RobotCenterstage : React.FC = () => {
    return (
        <div className = "robotPage centerstageRobot">
            <h1>Powerplay Robot</h1>
            <img src = {PowerplayImage} alt = "Imgage of Hydrogen Nova, our robot from Powerplay"/>
            <h2>This is Hydrogen Nova, our robot from the Powerplay season</h2>
        </div>
    );
}
export default RobotCenterstage;