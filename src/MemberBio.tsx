import React from "react";
import "./css/MemberBio.css";
import GetBioByName from "./GetBioByName";

interface MemberBioProps {
    name: string;
    bio: string;
    image: string;
}
const MemberBio: React.FC<MemberBioProps> = ({name , image}) => {
    return (
        <div className="memberBio">
            <img src={image} alt={"picture of" + name}/>
            <h1>{name}</h1>
            <GetBioByName name={name}/>
        </div>
    )
}
export default MemberBio;