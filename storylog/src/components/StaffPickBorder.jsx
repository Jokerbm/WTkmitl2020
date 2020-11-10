import React from "react";

function StaffPickBorder(props) {
    return (
        <React.Fragment>
            <div className ="feed-card highlight bb th-font2"  data-toggle="modal" data-target="#exampleModalLong"
                style={{ backgroundImage: "url(" + props.banner + ")"}}>
                {/*<div className="feed-highlight-badge-box"></div>*/}
                <div className="feed-highlight-badge-box"></div>
                <div className="w-clearfix feed-card inheightlight animated fadeIn staffpick">
                    <img className="img-feed-highlight"
                         src="https://s3-ap-southeast-1.amazonaws.com/media.storylog/storycontent/5f96d442c8def3723ca3d2d7/16037223386081275010.jpg"
                         width="100%"/>

                    <div className="feed-info nobg highlight">
                        <div className="w-clearfix feed-type">
                            <div className="feed-badge-small staffpick"></div>
                            <a className="" target="_self" href={"#/category/" +  props.category}>
                                <img
                                    height="30px"
                                    alt={"experience"}
                                    src={process.env.PUBLIC_URL + props.img_cate}
                                ></img>
                            </a>
                        </div>
                        <a href="#/story/5f96d442c8def3723ca3d2d7">
                            <div className="feed-info-title">
                                <b>{props.subject}</b>
                            </div>
                            <div className="feed-info-detail">
                                {props.intro}
                            </div>
                        </a>
                        <div className="w-clearfix feed-info-point">
                            <div className="text">
                                <span>{props.time}</span>
                                <span>&nbsp;&nbsp;</span>
                            </div>
                            <span>
                <span>|&nbsp;&nbsp;</span>
                <div className="text orange">
                  <span>{props.recommended}</span>
                  <span>&nbsp;</span>
                </div>
                <div className="text">recommended</div>
              </span>
                        </div>
                    </div>
                    <div className="w-clearfix feed-profile hightlight">
                        <a className="" href={"#/about/" + props.name}>
                            <div
                                className="feed-profile-img highlight img-bg"
                                style={{ backgroundImage: "url(" + props.image_profile + ")" }}></div>
                            <div className="feed-info-username highlight">{props.name}</div>
                            <div className="feed-info-role highlight">{props.nickname}</div>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default StaffPickBorder;

