import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">
            <nav class="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#2eb494" }}>
                <div class="container">
                    <Link class="navbar-brand" to="/">
                        <div class="logo" tabindex="-1">
                            <img src="https://storylog.co/assets/2G7zO-D.svg" alt=""></img>
                        </div>
                    </Link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li
                                class={`nav-item  ${props.location.pathname === "/" ? "active" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/">
                                    Home
                  <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li
                                class={`nav-item  ${props.location.pathname === "/about" ? "active" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/about">
                                    About
                </Link>
                            </li>
                            <li
                                class={`nav-item  ${props.location.pathname === "/contact" ? "active" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/contact">
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