import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
    <div id="nav" className="nav hideNavDropdown">
        <div className="w-section bg-nav">
            <div className="w-container nav-con">
                <div className="nav-space"></div>
                <a className="" href="/">
                    <div className="logo" tabIndex="-1"></div>
                </a>
                <div id="searchBox" className="nav-search w-clearfix">
                    <div className="inputEditTable" id="searchInput" contentEditable="true"
                         placeholder="วันนี้อยากอ่านอะไร?"></div>
                    <div className="bb nav-search-bb"></div>
                </div>
                <noscript></noscript><div>
                    <div className="bb-noshadow nav-bb profile" tabIndex="-1">&nbsp; &nbsp;</div>
                <div  id="icon-menu">
                    <a className="" href="/philosophy">
                        <div className="bb-noshadow nav-bb philo">&nbsp; &nbsp; </div>
                    </a><a className="" href="/feed">
                    <div className="bb-noshadow nav-bb explore">&nbsp; &nbsp; </div>
                </a><a className="" href="/">
                    <div className="bb-noshadow nav-bb home">&nbsp; &nbsp; </div>
                </a>
                </div>
            </div>
                <div id="mobile-nav">
                    {/*<div className="bgdropdown mobileNav"></div>*/}
                    {/*<div className="dropdown dropdown-nav on nav-mobile animated fadeIn nano-content">*/}
                    {/*    <div className="pofile-popup mobile-nav">*/}
                    {/*        <a className=" active" href="/">*/}
                    {/*            <div className="noti-item profile mobile-nav">Home</div>*/}
                    {/*        </a><a className="" href="/feed">*/}
                    {/*        <div className="noti-item profile mobile-nav">*/}
                    {/*            <div>Story feed</div>*/}
                    {/*        </div>*/}
                    {/*    </a>*/}
                    {/*        <div className="bb noti-item profile mobile-nav">*/}
                    {/*            <div>Search</div>*/}
                    {/*        </div>*/}
                    {/*        <a className="" href="/bookmark">*/}
                    {/*            <div className="noti-item profile mobile-nav">*/}
                    {/*                <div >Bookmark</div>*/}
                    {/*            </div>*/}
                    {/*        </a><a className="" href="/create">*/}
                    {/*        <div className="bb noti-item profile mobile-nav">*/}
                    {/*            <div>Tell a story</div>*/}
                    {/*        </div>*/}
                    {/*    </a></div>*/}
                    {/*    <div className="popup-noti-footer no-shadow"><span>Storylog © 2015</span><span>∙</span><a className="" href="/user-agreement">User*/}
                    {/*        Agreement</a><span>∙ </span><a className="" href="/contact-us" >Contact*/}
                    {/*        Us</a></div>*/}
                    {/*</div>*/}
                </div>
                {/*<button className="nav-bb mobile select modal-opened modal-opened-inbox"></button>*/}
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

//
// <div>
//     <div className="bb-noshadow nav-bb profile" tabIndex="-1"></div>
//     <a className="" href="/philosophy">
//         <div className="bb-noshadow nav-bb philo"></div>
//     </a><a className="" href="/feed">
//     <div className="bb-noshadow nav-bb explore"></div>
// </a><a className="" href="/">
//     <div className="bb-noshadow nav-bb home"></div>
// </a></div>


// <button className="nav-bb mobile"></button>
// <div className="btn-group">
//     <i className="fas fa-home cus-icon py-1"></i>
//     <i className="fas fa-question cus-icon py-1"></i>
//     <i className="fas fa-user-circle cus-icon py-1"></i>
//     <i className="glyphicon glyphicon-align-left"></i>
// </div>

// <div id="mobile-nav">
//     <div className="bgdropdown mobileNav"></div>
//     <div className="dropdown dropdown-nav on nav-mobile animated fadeIn nano-content">
//         <div className="pofile-popup mobile-nav">
//             <a className=" active" href="/">
//                 <div className="noti-item profile mobile-nav">Home</div>
//             </a><a className="" href="/feed">
//             <div className="noti-item profile mobile-nav">
//                 <div>Story feed</div>
//             </div>
//         </a>
//             <div className="bb noti-item profile mobile-nav">
//                 <div>Search</div>
//             </div>
//             <a className="" href="/bookmark">
//                 <div className="noti-item profile mobile-nav">
//                     <div >Bookmark</div>
//                 </div>
//             </a><a className="" href="/create">
//             <div className="bb noti-item profile mobile-nav">
//                 <div>Tell a story</div>
//             </div>
//         </a></div>
//         <div className="popup-noti-footer no-shadow"><span>Storylog © 2015</span><span>∙</span><a className="" href="/user-agreement">User
//             Agreement</a><span>∙ </span><a className="" href="/contact-us" >Contact
//             Us</a></div>
//     </div>
// </div>