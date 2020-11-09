import React from "react";
import {withRouter } from "react-router-dom";

function Navigation(props) {
    let home = "bb-noshadow nav-bb home "
    let philo = "bb-noshadow nav-bb philo "
    let feed = "bb-noshadow nav-bb explore "
    if(props.home){
        home += "active"
    }
    else if(props.philo){
        philo += "active"
    }
    else if(props.feed){
        feed += "active"
    }
    return (
        <React.Fragment>
    <div id="nav" className="nav hideNavDropdown">
        <div className="w-section bg-nav">
            <div className="w-container nav-con">
                <div className="nav-space"></div>
                <a className="" href="#/">
                    <div className="logo" tabIndex="-1"></div>
                </a>
                <div id="searchBox" className="nav-search w-clearfix">
                    <div className="inputEditTable" id="searchInput" contentEditable="true"
                         placeholder="วันนี้อยากอ่านอะไร?"></div>
                    <div className="bb nav-search-bb"></div>
                </div>
                <button className="nav-bb mobile" data-reactid=".1fg5q4613wg.0.0.7.0.0.7"></button>

                <noscript></noscript><div>
                    <div className="bb-noshadow nav-bb profile" tabIndex="-1" data-toggle="modal" data-target="#exampleModal">&nbsp; &nbsp;</div>
                <div  id="icon-menu">
                    <a className="" href="#/philosophy">
                        <div className={philo}>&nbsp; &nbsp; </div>
                    </a><a className="" href="#/feed/latest">
                    <div className={feed}>&nbsp; &nbsp; </div>
                </a><a className="" href="#/">
                    <div className={home}>&nbsp; &nbsp; </div>
                </a>
                </div>
            </div>
                {/*<button className="nav-bb mobile select modal-opened modal-opened-inbox"></button>*/}
            </div>
        </div>
    </div>
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="card-popup login">
                    <div className="popup-title th-font2" id="exampleModalLabel"><h4 className="p-2"><b>LOGIN TO STORYLOG</b></h4></div>
                </div>
                <div className="register-form center">
                    <button className="facebook-login-button mb-3">
                        <img className="facebook-login-button-icon" width="24" height="24" src={process.env.PUBLIC_URL + 'img/facebook.png'} alt="test">
                        </img><span className="th-font2"> Login with Facebook</span>
                    </button>
                    <div className="text th-font2">เราใช้การล็อคอินผ่าน
                        Facebook เพราะเราให้ความสำคัญกับตัวตนของนักเขียน
                        อย่างไรก็ตามคุณสามารถแก้ไขเปลี่ยนชื่อและรูปภาพได้ภายหลังจากการสมัครทันที
                    </div>
                    <div className="tabs">
                        <div className="tabs-text login th-font2">OR</div>
                        <div className="tabs-line login"></div>
                    </div>
                    <div className="w-form">
                        <input className="w-input input th-font2 mb-4" id="input_username_login" type="text"
                               placeholder="Penname (Username)"></input>
                        <input className="w-input input th-font2" id="input_password_login" type="password"
                               placeholder="Password"></input>
                    </div>
                </div>
                <div className="popup-footer">
                    <button className="button" data-dismiss="modal">Cancel</button>
                    <button className="button green">Login</button>
                </div>
            </div>
        </div>
    </div>
        </React.Fragment>
    );
}

export default withRouter(Navigation);
