import React from "react";
import SuperNovaPlanetLogo from "./images/SupernovaPlanetLogoTransparent.png";
import "./Layout.css";
import {Link, Outlet} from "react-router-dom";
const Layout = () => {
    return (
        <div id = "page">
            <div className = "layout">
            <nav>
                <ul>
                    <li>
                        <Link className="link" to = "/">
                            <div className= "logo"> <h1>SUPERNOVA.EXE</h1> <img src={SuperNovaPlanetLogo} alt= "A planet with the text SUPERNOVA.EXE written on it" /></div>
                        </Link>
                    </li>
                    <li>
                        <Link className= "link" to="/">Home</Link>
                    </li>
                    <li >
                        <Link className= "link" to="/meet">Meet the team</Link>
                    </li>
                     {/*<li>*/}
                     {/*    <Link className = "link" to = "/outreach">Outreach</Link>*/}
                     {/*</li>*/}
                    <li><Link className="link" to = "/sponsors">Sponsors</Link></li>
                </ul>
            </nav>

            </div>
            <Outlet/>
            </div>
    )
};
export default Layout;