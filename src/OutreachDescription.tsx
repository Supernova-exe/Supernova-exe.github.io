import React, {ReactNode} from "react";
import "./OutreachDescription.css";


interface OutreachDescriptionProps {
    imgPath : string;
    title : string | ReactNode;
    inverted ?: boolean;

}
const OutreachDescription : React.FC<OutreachDescriptionProps> = ({imgPath ,title, inverted}) => {
    if(inverted)
    {
        return (
            <div className = "outreachDescription inverted">
                    <h2>{title}</h2>
                <img src = {imgPath} alt = "Outreach"/>
            </div>
        );
    }
    return (
        <div className = "outreachDescription">
            <img src = {imgPath} alt = {`Image of ${title}`}/>
            <h2>{title}</h2>
        </div>
    );
}
export default OutreachDescription;