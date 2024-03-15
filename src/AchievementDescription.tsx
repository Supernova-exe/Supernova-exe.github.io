import React from "react";
import OutreachDescription from "./OutreachDescription";

interface AchievementDescriptionProps {
    imgPath : string;
    title : string
    achievements : string[];
    inverted ?: boolean;

}
const AchievementDescription : React.FC<AchievementDescriptionProps> = ({imgPath, title, achievements, inverted}) => {
    return (
            <OutreachDescription imgPath={imgPath} title={
                <div style={{width : "100%"}}><h3>{title}</h3>
                    <ul style={{listStyle : "none"}}>
                        {achievements.map((achievement, index) => {
                            return <li key={index}>{achievement}</li>
                        })}
                    </ul></div>
            } inverted={inverted}/>
    );
}

export default AchievementDescription;