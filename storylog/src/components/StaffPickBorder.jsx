import React from "react";

function StaffPickBorder(props) {
    return (
        <React.Fragment>
            <div
                className="feed-card highlight bb th-font2"
                style={{ backgroundImage: "url(" + props.banner + ")" }}
            >
                <div className="feed-highlight-badge-box"></div>
                <div className="w-clearfix feed-card inheightlight animated fadeIn staffpick">
                    <div className="feed-info nobg highlight">
                        <div className="w-clearfix feed-type">
                            <div className="feed-badge-small staffpick"></div>
                            <a className="" href="#/category/shortstory">
                                <img
                                    height="30px"
                                    alt={"experience"}
                                    src={process.env.PUBLIC_URL + "img/experience.svg"}
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
                        <a className="" href={"#/" + props.name}>
                            <div
                                className="feed-profile-img highlight img-bg"
                                style={{
                                    backgroundImage:
                                        'url("https://s3-ap-southeast-1.amazonaws.com/media.storylog/usercontent/5f267fdea834c3fc0123ab15/15963591366138532840.jpg")',
                                }}
                            ></div>
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

