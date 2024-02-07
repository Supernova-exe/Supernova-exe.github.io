import React, {useEffect, useState} from "react";
import "./HomePage.css";
import TextImageOverlay from "./TextImageOverlay";
import mainImage from "./images/Supernova.jpg";
import Markdown from "react-markdown";

const path : string = "WhoWeAre.md";
const HomePage: React.FC = () => {
    const [markdown, setMarkdown] = useState('');
    useEffect(() => {
        import(("./markdown/" + path))
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setMarkdown(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }, [path]);
    return (
     <div className = "homePage">
        <TextImageOverlay imageUrl={mainImage} alt= "picture of team members with their robot">
            <h1>SUPERNOVA.EXE 21774</h1>
        </TextImageOverlay>
         <div className = "aboutUs">
         <h1>Who we are</h1>
             <Markdown>
                    {markdown}
             </Markdown>
         </div>
     </div>
 )
}
export default HomePage;
