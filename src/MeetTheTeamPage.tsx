import React from "react";
import "./MeetTheTeamPage.css";
import IsaacImage from "./images/TeamMemberImages/IsaacSupernova.jpg";
import BillyImage from "./images/TeamMemberImages/BillySupernova.jpg";
import KateImage from "./images/TeamMemberImages/KateSupernova.jpg";
import SherryImage from "./images/TeamMemberImages/SherrySupernova.jpg";
import ThomasImage from "./images/TeamMemberImages/ThomasSupernova.jpg";
import VinuthaImage from "./images/TeamMemberImages/VinuthaSupernova.jpg";
import MemberBio from "./MemberBio";

const MeetTheTeamPage: React.FC = () => {
    return (
        <div className = "meetTheTeamPage">
        <h1>Meet the team</h1>
            <div className = "bio-container">
            <div> <MemberBio name= "Isaac" bio= "Isaac.md" image={IsaacImage}/></div>
           <div><MemberBio name= "Billy" bio= "Billy.md" image={BillyImage}/></div>
             <div><MemberBio name= "Kate" bio= "Kate.md" image={KateImage}/></div>
                <div><MemberBio name= "Sherry" bio= "Sherry.md" image={SherryImage}/></div>
                <div><MemberBio name= "Thomas" bio= "Thomas.md" image={ThomasImage}/></div>
                <div><MemberBio name= "Vinutha" bio= "Vinutha.md" image={VinuthaImage}/></div>
                </div>
        </div>
    )
}
export default MeetTheTeamPage;