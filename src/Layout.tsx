import React from "react";
import
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
                        <img s/>
                        </Link>
                    </li>
                    <li >
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