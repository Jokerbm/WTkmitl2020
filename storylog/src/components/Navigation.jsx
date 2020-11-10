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
                <button className="nav-bb mobile"></button>

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
            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document" id="content">
                    <div className="modal-content">
                        <div className="card-popup click">
                            <div className="popup-border-title" id="exampleModalLong">
                                <img className="click-border" src={process.env.PUBLIC_URL + 'img/pogemon.jpg'} alt="test"/>
                            </div>
                            <div className="register-form-click all blog">
                                <a className="blog" target="_self" href="#/category/short story">
                                    <img height="40px" src="img/shortstory.svg"/></a>
                            </div>
                            <div className="register-form-click center all">
                                <div className="tabs">
                                    <div className="feed-badge-small staffpick border"></div>
                                    <div className="tabs-text clickborder th-font2 title-click">Subject</div>
                                    <div className="tabs-line login"></div>
                                </div>
                                <div className="text line th-font2 blog">เราใช้การล็อคอินผ่าน
                                    Facebook เพราะเราให้ความสำคัญกับตัวตนของนักเขียน
                                    อย่างไรก็ตามคุณสามารถแก้ไขเปลี่ยนชื่อและรูปภาพได้ภายหลังจากการสมัครทันที
                                    เราใช้การล็อคอินผ่าน
                                    Facebook เพราะเราให้ความสำคัญกับตัวตนของนักเขียน
                                    อย่างไรก็ตามคุณสามารถแก้ไขเปลี่ยนชื่อและรูปภาพได้ภายหลังจากการสมัครทันที
                                    เราใช้การล็อคอินผ่าน
                                    Facebook เพราะเราให้ความสำคัญกับตัวตนของนักเขียน
                                    อย่างไรก็ตามคุณสามารถแก้ไขเปลี่ยนชื่อและรูปภาพได้ภายหลังจากการสมัครทันที
                                    เราใช้การล็อคอินผ่าน
                                    Facebook เพราะเราให้ความสำคัญกับตัวตนของนักเขียน
                                    อย่างไรก็ตามคุณสามารถแก้ไขเปลี่ยนชื่อและรูปภาพได้ภายหลังจากการสมัครทันที
                                    เราใช้การล็อคอินผ่าน
                                    Facebook เพราะเราให้ความสำคัญกับตัวตนของนักเขียน
                                    อย่างไรก็ตามคุณสามารถแก้ไขเปลี่ยนชื่อและรูปภาพได้ภายหลังจากการสมัครทันที
                                    เราใช้การล็อคอินผ่าน
                                    Facebook เพราะเราให้ความสำคัญกับตัวตนของนักเขียน
                                    อย่างไรก็ตามคุณสามารถแก้ไขเปลี่ยนชื่อและรูปภาพได้ภายหลังจากการสมัครทันที
                                    เราใช้การล็อคอินผ่าน
                                    Facebook เพราะเราให้ความสำคัญกับตัวตนของนักเขียน
                                    อย่างไรก็ตามคุณสามารถแก้ไขเปลี่ยนชื่อและรูปภาพได้ภายหลังจากการสมัครทันที
                                    เราใช้การล็อคอินผ่าน
                                    Facebook เพราะเราให้ความสำคัญกับตัวตนของนักเขียน
                                    อย่างไรก็ตามคุณสามารถแก้ไขเปลี่ยนชื่อและรูปภาพได้ภายหลังจากการสมัครทันที
                                    เราใช้การล็อคอินผ่าน
                                    Facebook เพราะเราให้ความสำคัญกับตัวตนของนักเขียน
                                    อย่างไรก็ตามคุณสามารถแก้ไขเปลี่ยนชื่อและรูปภาพได้ภายหลังจากการสมัครทันที
                                    <br></br><br></br>
                                </div>
                                <div className="content-tags"><span>#</span><span>dystopia</span></div>
                                <button className="content-share-bb_share recommend"></button>
                                <div className="content-share-count like" style={{cursor:"pointer;"}}>70
                                </div>
                            </div>
                            <div className="popup-footer">
                                <span>Published </span><span>October 26, 2020</span><span>&nbsp; | &nbsp;</span>
                                <div className="creadit-box"><a
                                    href="#/CreativeCommons" target="_blank">
                                    <div className="icon-creadit"></div>
                                    <div className="icon-creadit non-com"></div>
                                </a></div>
                            </div>
                            <div className="tab">
                                <div className="tabs-line login"></div>
                            </div>
                            <div className="register-form center all">
                                <div className="row blog">
                                    <div className="col profile">
                                        <div className="profile-user-image_user sizee"
                                             style={{backgroundImage: "url(" + "https://s3-ap-southeast-1.amazonaws.com/media.storylog/usercontent/5e56a440a1d6b666713dd5c7/16022734106659680676.jpg" + ")"}}></div>
                                    </div>
                                    <div className="col">
                                        <div className="row">Hello</div>
                                        <div className="row">
                                            <div className="col1 green"><b>My name</b></div>
                                            <div className="col1">NickName</div>
                                        </div>
                                        <div className="row">Status</div>
                                    </div>
                                    <div className="content-profile-img-box follow">
                                        <div className="bb w-clearfix button follow">
                                            <div className="icon-follow"></div>
                                            <div className="text">Follow
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-dialog zz th-font2" role="document" id="content">
                    <div className="modal-content">
                        <div className="paddingg">
                            <h4 className="light">Comments</h4>
                            <div className="w-clearfix content-comment-card noborder">
                                <div className="w-clearfix content-comment-profile">
                                    <div className="content-comment-profile-img"></div>
                                </div>
                                <div className="content-comment-detail">
                                    <div className="input-comment">
                                        <div className="input-comment-text" id="commentInput" contentEditable="true"
                                             placeholder="Say something about this story..."></div>
                                        <button className="input-comment-bb"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="actionBar">
                    <div>
                        <div className="w-clearfix content-footer animated fadeIn">
                            <a className="" href="/OttoChain">
                                <div className="content-share-profile_icon sizee"
                                     style={{ backgroundImage: "url(" + "https://s3-ap-southeast-1.amazonaws.com/media.storylog/usercontent/5e56a440a1d6b666713dd5c7/16022734106659680676.jpg"+")"}}></div>
                                <div className="content-share-text text green">OttoChain
                                </div>
                                <div className="content-share-text"><span>&nbsp;&nbsp;</span><span>Tutor, Musician</span></div>
                            </a>
                            <div className="bb bb-edit-content"></div>
                            <div className="bb content-share-share_bb">
                                <div className="content-share-icon_share_bb recommend"></div>
                                <div className="left content-share-bb_text recommend">Recommend
                                </div>
                            </div>
                            <div className="bb content-share-share_bb bookmark">
                                <div className="content-share-icon_share_bb bookmark"></div>
                                <div className="left content-share-bb_text bookmark">Bookmark
                                </div>
                            </div>
                            <div className="content-share-share_bb">
                                <div className="content-share-icon_share_bb"></div>
                                <div className="left content-share-bb_text">Share
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button id="bb_close_modalStoryDetail" className="bb bb-close-popup animated fadeIn"></button>
            </div>
        </React.Fragment>
    );
}

export default withRouter(Navigation);
