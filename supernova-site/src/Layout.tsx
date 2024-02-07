import React from "react";
import "./Layout.css";
import SLogo from "./images/SupernovaSLogoTransparent.png";
import  PlanetLogo from "./images/SupernovaPlanetLogoTransparent.png";
import {Link, Outlet} from "react-router-dom";
const Layout = () => {
    return (
        <div id = "page">
            <div className = "layout">
                <div className= "logo">
                    <img className= "s-logo" src= {SLogo} alt = "A logo for supernova"/>
                </div>
            <nav>
                <ul>
                    <li>
                        <Link className= "link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className= "link" to="/meet">Meet the team</Link>
                    </li>
                    <li><Link className = "link" to = "/outreach">Outreach</Link></li>
                </ul>
            </nav>
                <div className="logo">
                    <img className= "planetLogo" src={PlanetLogo} alt="a logo for supernova featuring a plantet with Supernova.exe written on it"/>
                </div>
            </div>
            <Outlet/>
        </div>
    )
};
export default Layout;