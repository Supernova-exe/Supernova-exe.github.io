
import React from 'react';
import "./RobotPage.css";
import ScorpioImage from "./images/ScorpioImage.jpg";

const RobotPowerplay : React.FC = () => {
    return (
        <div className="robotPage powerplayRobot">
            <h1>Centerstage Robot</h1>
            <img src={ScorpioImage} alt="Imgage of Scorpio, our robot from Centerstage"/>
            <h2>This is Scorpio, our robot from the Centerstage season</h2>
            <h1>Behind the bot</h1>
            <br/>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/iin2ZSc_T18?si=l-04P1s2jr1_Qw2v"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </div>
    );
}
export default RobotPowerplay;
