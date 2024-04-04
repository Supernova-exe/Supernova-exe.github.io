import React from "react";
import "./css/MenuPage.css";
import {Link} from "react-router-dom";

const AchievementsMainPage : React.FC = () => {
    return (
        <div className= "menuPage achievementsMainPage">
            <h1>Achievements</h1>
            <nav>
                <ul>
                    <li><Link to = "/achievements/centerstage">Centerstage (2023-2024)</Link></li>
                    <li><Link to = "/achievements/powerplay">Powerplay (2022-2023)</Link></li>
                </ul>
            </nav>
        </div>
    );
}
export default AchievementsMainPage;