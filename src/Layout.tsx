import React, {useEffect, useRef, useState} from "react";
import "./css/Layout.css";
import "./MobileNavBar.css";
import  { Link, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import SupernovaLogo from './images/SupernovaSLogoTransparent.png';

const Layout = () => {
    const mobile : boolean =  window.innerWidth < 770;
    const [gap, setGap] = useState(0);

    const [showNav, setShowNav]  = useState(false);
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

    const [stickyFooter, setStickyFooter] = useState(true);
    const content = useRef(null);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                if (entry.target === content.current) {
                    if (entry.contentRect.height  < window.innerHeight - 175) {
                        setStickyFooter(true);
                    } else {
                        setStickyFooter(false);
                    }
                }
            }
        });

        if (content.current) {
            resizeObserver.observe(content.current);
        }

        return () => {
            if (content.current) {
                resizeObserver.unobserve(content.current);
            }
        };
    }, []);
    return (
        <div className = "page">
            <div ref = {content} className = "not-footer">
                <header>
                <div className={mobile ? showNav ? 'layout-mobile open' : 'layout-mobile' : 'layout'}
                 key={mobile ? 'mobile' : "computer"}>
                <nav>
                    <div className="nav-header" style={{/*{width : "max(100vw, 100%);"}*/}}>
                        <Link className="link" to="/">

                            <div className="logo" style={{left: "5vw"}}>
                                <h1> SUPERNOVA.EXE</h1>
                                <img src={SupernovaLogo} alt='A logo for supernoa' className="logoImage"/>
                            </div>
                        </Link>

                        <button className="nav-button" onClick={() => setShowNav(!showNav)} aria-label = {showNav? "Hide navigation options and back to page" : "Show navigation options"}>
                            {showNav ?  <FaTimes/>  : <FaBars/>}
                        </button>
                    </div>
                    <ul className={mobile ? showNav ? 'nav-links show-nav' : 'nav-links' : 'nav-computer'}
                        style={mobile ? {} : {display: "flex", gap: `${gap}px`}}>
                        <li className="li-0">
                            <Link onClick={() => setShowNav(false)} className="link" to="/">Home</Link>
                        </li>
                        <li className="li-1">
                            <Link onClick={() => setShowNav(false)} className="link" to="/meet">Meet the team</Link>
                        </li>
                        <li className="li-2">
                            <Link className="link" onClick={() => setShowNav(false)} to="/sponsors">Sponsors</Link>
                        </li>
                        <li className="li-4">
                            <Link className="link" onClick={() => setShowNav(false)} to="/outreach/main">Outreach</Link>
                        </li>
                        <li className="li-5">
                            <Link className="link" onClick={() => setShowNav(false)} to="/achievements/main">Achievements</Link>
                        </li>
                        <li className="li-6">
                            <Link className="link" onClick={() => setShowNav(false)} to="/robots/main">Robot</Link>
                        </li>
                    </ul>
                </nav>
                </div>
                </header>
                <div className={!mobile ? "content" : showNav ? "content hide" : "content"}>
                    <Outlet/>
                </div>
            </div>
            <footer style={showNav ? {display: "none"} : stickyFooter ? {
                position: "absolute",
                bottom: "0",
                width: "100vw"
            } : {marginTop: "auto"}}>
                <h1>Supernova.exe 21774</h1>
                <p>Email : <a style={{textDecoration: "none", color: "black"}}
                              href="mailto:supernova21774@gmail.com">supernova21774@gmail.com</a></p>
                <p>©2024 Supernova.exe 21774</p>
                <br/>
            </footer>
        </div>
    )
};
export default Layout;
