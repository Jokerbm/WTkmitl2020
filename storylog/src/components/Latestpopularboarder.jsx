import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";

import {withRouter} from "react-router-dom";


function Latestpopularboarder(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <div onClick={handleShow} className="bb w-clearfix feed-card animated fadeIn th-font2">
                <div className="feed-info bg-linear"
                     style={{backgroundImage: "linear-gradient(to right, white, rgba(255, 255, 255, 0.9)),url(" + props.banner + ")"}}>
                    <div className="w-clearfix feed-type">
                        <a className="" href={"#/category/" + props.category}>
                            <img height="30px" alt={"imgcate"} src={process.env.PUBLIC_URL + props.img_cate}></img>
                        </a>
                    </div>
                    <div className="feed-info-title"><b>{props.subject}</b>
                    </div>
                    <div className="feed-info-detail">{props.intro}
                    </div>
                    <div className="w-clearfix feed-info-point">
                        <div className="text"><span>{props.time}</span><span>&nbsp;&nbsp;</span></div>
                        <span><span>|&nbsp;&nbsp;</span><div
                            className="text orange"><span>{props.recommended}</span><span>&nbsp;</span></div>
                        <div className="text">recommended</div></span>
                    </div>
                </div>
                <div className="w-clearfix feed-profile hightlight">
                    <a className="" href={"#/about/" + props.name}>
                        <div className="feed-profile-img highlight img-bg" style={{
                            backgroundImage: "url(" + props.image_profile + ")"
                        }}></div>
                        <div className="feed-info-username highlight">{props.name}
                        </div>
                        <div className="feed-info-role highlight">{props.nickname}</div>
                    </a>
                </div>

            </div>
            <Modal show={show} onHide={handleClose}>
                <div className="modal" style={{display: "block"}} role="dialog">
                    <div className="modal-dialog" role="document" id="content">
                        <div className="modal-content">
                            <div className="card-popup click">
                                <div className="popup-border-title" id="exampleModalLong">
                                    <img className="click-border" src={props.banner} alt="test"/>
                                </div>
                                <div className="register-form-click all blog">
                                    <a className="blog" target="_self" href={"#/category/" + props.category}>
                                        <img height="40px" alt={"imgcate"} src={process.env.PUBLIC_URL + props.img_cate}/></a>
                                </div>
                                <div className="register-form-click center all">
                                    <div className="tabs">
                                        <div className="feed-badge-small staffpick border"></div>
                                        <div className="th-font2 tabs-text clickborder title-click">
                                            <b>{props.subject}</b></div>
                                        <div className="tabs-line login"></div>
                                    </div>
                                    <div className="text line th-font2 blog">{props.paragraph}
                                        <br></br><br></br>
                                    </div>
                                    <div className="content-tags th-font2"><span></span><span>{props.tag[0]}</span>
                                    </div>
                                    <button className="content-share-bb_share recommend"></button>
                                    <div className="content-share-count like"
                                         style={{cursor: "pointer"}}>{props.recommended}
                                    </div>
                                </div>
                                <div className="popup-footer th-font2">
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
                                                 style={{backgroundImage: "url(" + props.image_profile + ")"}}></div>
                                        </div>
                                        <div className="col">
                                            <div className="row">Writer</div>
                                            <div className="row">
                                                <div className="col1 green"><b>{props.name}</b></div>
                                                <div className="col1">Write</div>
                                            </div>
                                            <div className="row">{props.nickname}</div>
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
                            <div className="w-clearfix content-footer animated fadeIn th-font2">
                                <a className="th-font2" href={"#/about/" + props.name}>
                                    <div className="content-share-profile_icon sizee th-font2"
                                         style={{backgroundImage: "url(" + props.image_profile + ")"}}></div>
                                    <div className="content-share-text text green th-font2">{props.name}
                                    </div>
                                    <div className="content-share-text th-font2">
                                        <span>&nbsp;&nbsp;</span><span>{props.nickname}</span></div>
                                </a>
                                <div className="bb bb-edit-content"></div>
                                <div className="bb content-share-share_bb th-font2">
                                    <div className="content-share-icon_share_bb recommend"></div>
                                    <div className="left content-share-bb_text recommend">Recommend
                                    </div>
                                </div>
                                <div className="bb content-share-share_bb bookmark th-font2">
                                    <div className="content-share-icon_share_bb bookmark"></div>
                                    <div className="left content-share-bb_text bookmark">Bookmark
                                    </div>
                                </div>
                                <div className="content-share-share_bb th-font2">
                                    <div className="content-share-icon_share_bb"></div>
                                    <div className="left content-share-bb_text">Share
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button id="bb_close_modalStoryDetail" onClick={handleClose}
                            className="bb bb-close-popup animated fadeIn"></button>
                </div>
            </Modal>
        </React.Fragment>

    );
}

export default withRouter(Latestpopularboarder);
