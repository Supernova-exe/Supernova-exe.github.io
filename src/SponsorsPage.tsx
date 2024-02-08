import React from "react";
import "./SponsorsPage.css";
import GoBuildaImage from "./images/Sponsors/GoBuilda.png";
import MontgomeryPrintingImage from "./images/Sponsors/MontgomeryPrinting.png";
import PrecisionPointImage from "./images/Sponsors/PrecisionPoint.jpg";
import RedhatImage from "./images/Sponsors/Redhat.png";
import VIAVIImage from "./images/Sponsors/VIAVI.png";
const SponsorsPage : React.FC = () => {
  return (
    <div className= "sponsorsPage">
      <h1>Sponsors</h1>
        <img src={GoBuildaImage} alt="Go Builda Logo"/>
        <img src={MontgomeryPrintingImage} alt="Montgomery Printing Logo"/>
        <img src={PrecisionPointImage} alt="Precision Point Logo"/>
        <img src={RedhatImage} alt="Redhat Logo"/>
        <img src={VIAVIImage} alt="VIAVA Logo"/>
    </div>
  );
};
export default SponsorsPage;