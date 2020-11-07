import React from "react";
import {withRouter} from "react-router-dom";

function Latestpopularboarder(props){
    return (
        <div className="bb w-clearfix feed-card animated fadeIn th-font2">
            <div className="feed-info bg-linear">
                {/*ใส่ bg ได้ตรงนี้*/}
                <div className="w-clearfix feed-type">
                    <a className="" href="#/Category/Shortstory"><img alt={"shortstory"}
                    height="30px" src={process.env.PUBLIC_URL + 'img/shortstory.svg'}></img>
                    </a>
                </div>
                <a href="#/story/5d90f5a997dcd98c47e93631">
                    <div className="feed-info-title"><b>{props.subject}</b>
                    </div>
                    <div className="feed-info-detail">{props.intro}
                    </div>
                </a>
                <div className="w-clearfix feed-info-point">
                    <div className="text"><span>{props.time}</span><span>&nbsp;&nbsp;</span></div>
                    <span><span>|&nbsp;&nbsp;</span><div className="text orange"><span>{props.recommended}</span><span>&nbsp;</span></div>
                        <div className="text">recommended</div></span>
                </div>
            </div>

            <div className="w-clearfix feed-profile hightlight">
                <a className="" href="#/">
                    <div className="feed-profile-img highlight img-bg" style={{backgroundImage: "url(" + props.image_profile + ")"
                    }}></div>
                    <div className="feed-info-username highlight">{props.name}
                    </div>
                    <div className="feed-info-role highlight">{props.nickname}</div>
                </a>
            </div>
        </div>
    );
}

export default withRouter(Latestpopularboarder);
