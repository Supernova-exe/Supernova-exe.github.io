import React, {useEffect, useState} from "react";
import "./Layout.css";
import "./MobileNavBar.css";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import SupernovaLogo from './images/SupernovaPlanetLogoTransparent.png';

const Layout = () => {
    const [showNav, setShowNav]  = useState(false);
    const mobile : boolean =  window.innerWidth < 770;
    const [gap, setGap] = useState(0);


        useEffect(() => {
            const updateGap = () => {
                if(mobile) return;
                const numItems = document.querySelectorAll('.nav-computer li').length + 1;
                const viewportWidth = window.innerWidth;
                if(!mobile) setGap(viewportWidth *.25 / numItems);
            };

            window.addEventListener('resize', updateGap);
            updateGap();

            return () => window.removeEventListener('resize', updateGap);
        }, []);

    return (
        <div id="page">
            <div className={mobile? showNav? 'layout-mobile open' : 'layout-mobile' : 'layout'} key = {mobile? 'mobile' : "computer"}>
                <nav>
                    <div className="nav-header"  style={{/*{width : "max(100vw, 100%);"}*/}}>
                        <Link className="link" to = "/">

                        <div className=  "logo" style={{left : "5vw"}}>
                            <h1> SUPERNOVA.EXE</h1>
                         <img src={SupernovaLogo} alt="Supernova Logo" className="logoImage" />
                        </div>
                        </Link>

                        <button className="nav-button" onClick={() => setShowNav(!showNav)}>
                            {showNav ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                    <ul className={mobile? showNav? 'nav-links show-nav' : 'nav-links' : 'nav-computer'} style={mobile? {} : {display:"flex", gap: `${gap}px` }}>
                        <li className="li-0">
                            <Link onClick = {() => setShowNav(false)} className="link" to="/">Home</Link>
                        </li>
                        <li className="li-1">
                            <Link onClick = {() => setShowNav(false)} className="link" to="/meet">Meet the team</Link>
                        </li>
                        <li className="li-2">
                            <Link className="link" onClick={() => setShowNav(false)} to="/sponsors">Sponsors</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={!mobile? "content" : showNav? "content hide" : "content" }>
            <Outlet/>
            </div>

        </div>
    )
};

export default Layout;
