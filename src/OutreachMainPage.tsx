import React from "react";
import GetMarkdown from "./GetMarkdown";
import Markdown from "react-markdown";
import "./OutreachMainPage.css";
import {Link} from "react-router-dom";


const OutreachMainPage : React.FC = () => {
    return (
        <div className= "outreachMainPage">
            <h1>Outreach</h1>
                <Markdown>
                    {GetMarkdown("outreach/MainOutreach.md")}
                </Markdown>
            <nav>
                <ul>
                    <li><Link to = "../centerstage">Centerstage (2023-2024 Season)</Link></li>
                    <li><Link to = "../23-24OffSeason">2023-2024 Off Season</Link></li>
                </ul>
            </nav>
        </div>
    );
}
export default OutreachMainPage;