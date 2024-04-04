import React from "react";
import "./css/MenuPage.css";
import {Link} from "react-router-dom";

const RobotMainPage : React.FC = () => {
    return (
        <div className= "menuPage robotMainPage">
            <h1>Robots</h1>
            <nav>
                <ul>
                    <li><Link to = "/robot/centerstage">Centerstage (2023-2024)</Link></li>
                    <li><Link to = "/robot/powerplay">Powerplay (2022-2023)</Link></li>
                </ul>
            </nav>
        </div>
    );
}
export default RobotMainPage;