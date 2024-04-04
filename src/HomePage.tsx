import React from "react";
import "./css/HomePage.css";
import TextImageOverlay from "./TextImageOverlay";
import mainImage from "./images/Supernova.jpg";
import Markdown from "react-markdown";
import GetMarkdown from "./GetMarkdown";
import ContactForm from "./ContactForm";

const WhoWeArePath : string = "WhoWeAre.md";
const GetInTouchPath : string = "GetInTouch.md";
const HomePage: React.FC = () => {

    return (
     <div className = "homePage">
        <TextImageOverlay imageUrl={mainImage} alt= "picture of team">
            <h1>SUPERNOVA.EXE 21774</h1>
        </TextImageOverlay>
         <div className = "aboutUs">
         <h1>Who we are</h1>
             <Markdown>
                    {GetMarkdown(WhoWeArePath)}
             </Markdown>
         </div>
         <div className="getInTouch">
                <h1>Get in touch</h1>
             <Markdown>
                    {GetMarkdown(GetInTouchPath)}
             </Markdown>
             <ContactForm/>
         </div>
     </div>
 )
}
export default HomePage;
