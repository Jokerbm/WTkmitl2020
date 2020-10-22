import React from "react";
import { Link, withRouter } from "react-router-dom";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

function Navigation(props) {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#2eb494" }}>
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <div className="logo" tabIndex="-1">
                            <img src="https://storylog.co/assets/2G7zO-D.svg" alt=""></img>
                        </div>
                    </Link>

                    <MDBCol>
                        <input id="search" className="form-control" type="text" placeholder="วันนี้อยากอ่านอะไร?"/>
                        {/*<MDBIcon id="icon" icon="search" />*/}
                    </MDBCol>
  
                    <div className="buttob__group">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <div className="col">
                            <a href="#"><img className="icon" src="https://www.pngkit.com/png/full/31-316559_white-home-icon-no-background.png"/></a>
                            <span className="icon navbar-toggler-icon"/>
                        </div>
                    </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li
                                className={`nav-item  ${props.location.pathname === "/" ? "active" : ""
                                    }`}
                            >
                                <Link className="nav-link" to="/">
                                    Home
                  <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${props.location.pathname === "/about" ? "active" : ""
                                    }`}
                            >
                                <Link className="nav-link" to="/about">
                                    About
                </Link>
                            </li>
                            <li
                                className={`nav-item  ${props.location.pathname === "/contact" ? "active" : ""
                                    }`}
                            >
                                <Link className="nav-link" to="/contact">
                                    Contact
                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
          
        </div>
    );
}

export default withRouter(Navigation);