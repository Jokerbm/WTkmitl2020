import React from "react";
function ProfileBorder(props) {
    return (
        <React.Fragment>
    <div className="bb w-clearfix feed-card animated fadeIn th-font2">
        <div className="feed-info-profile bg-linear" style={{ backgroundImage: "linear-gradient(to right, white, rgba(255, 255, 255, 0.9)),url(" + props.banner + ")"}}>
            <div className="w-clearfix feed-type">
                <div className="feed-badge-small staffpick"></div>
                <a className="" href={"#/category/" +  props.category}>
                    <img height="30px" alt={"imgcate"} src={process.env.PUBLIC_URL + props.img_cate}></img>
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
    </div>
        </React.Fragment>

    );
}
export default ProfileBorder;
