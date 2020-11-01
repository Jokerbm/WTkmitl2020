import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
    <div id="nav" className="nav">
        <div className="w-section bg-nav">
            <div className="w-container nav-con">
                <div className="nav-space"></div>
                <a className="" href="/">
                    <div className="logo" tabIndex="-1"></div>
                </a>
                <div id="searchBox" className="w-clearfix nav-search">
                    <div className="inputEditTable" id="searchInput" contentEditable="true"
                         placeholder="วันนี้อยากอ่านอะไร?"></div>
                    <div className="bb nav-search-bb"></div>
                </div>
                <button className="nav-bb mobile"></button>
            </div>
        </div>
    </div>
    );
}

export default withRouter(Navigation);
// <div className="navigation">
//     <nav className="navbar navbar-expand-lg navbar-dark"
//          style={{backgroundColor: "#2eb494"}}>
//         <div className="container">
//             <Link class="navbar-brand" to="/">
//                 <div className="logo" tabIndex="-1">
//                     <img src="https://storylog.co/assets/2G7zO-D.svg" alt=""></img>
//                 </div>
//             </Link>
//             <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-toggle="collapse"
//                 data-target="#navbarResponsive"
//                 aria-controls="navbarResponsive"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//             >
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarResponsive">
//                 <ul className="navbar-nav ml-auto">
//                     <li
//                         className={`nav-item  ${
//                             props.location.pathname === "/" ? "active" : ""
//                         }`}
//                     >
//                         <Link class="nav-link" to="/">
//                             Home
//                             <span className="sr-only">(current)</span>
//                         </Link>
//                     </li>
//                     <li
//                         className={`nav-item  ${
//                             props.location.pathname === "/about" ? "active" : ""
//                         }`}
//                     >
//                         <Link class="nav-link" to="/about">
//                             About
//                         </Link>
//                     </li>
//                     <li
//                         className={`nav-item  ${
//                             props.location.pathname === "/contact" ? "active" : ""
//                         }`}
//                     >
//                         <Link class="nav-link" to="/contact">
//                             Contact
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </nav>
// </div>


// <div>
//     <div className="bb-noshadow nav-bb profile" tabIndex="-1"></div>
//     <a className="" href="/philosophy">
//         <div className="bb-noshadow nav-bb philo"></div>
//     </a><a className="" href="/feed">
//     <div className="bb-noshadow nav-bb explore"></div>
// </a><a className="" href="/">
//     <div className="bb-noshadow nav-bb home"></div>
// </a></div>