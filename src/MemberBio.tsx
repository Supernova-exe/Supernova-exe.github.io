import React from "react";
import "./MemberBio.css";
import GetMarkdown from "./GetMarkdown";
import Markdown from "react-markdown";

interface MemberBioProps {
    name: string;
    bio: string;
    image: string;
}
const MemberBio: React.FC<MemberBioProps> = ({name , bio, image}) => {
    return (
        <div className="memberBio">
            <img src={image} alt={"picture of" + name}/>
            <h1>{name}</h1>
            <Markdown>{GetMarkdown("bios/" + bio)}</Markdown>
        </div>
    )
}
export default MemberBio;