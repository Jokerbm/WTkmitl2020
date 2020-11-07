import React from "react";
import LatestPopularBorder from "../Latestpopularboarder";
import StaffPickBorder from "../StaffPickBorder";
import Navigation from "../Navigation";
import data from "../Article.json";

function Knowledge(){
    return (
        <React.Fragment>
            <Navigation/>
            <div className="banner know th-font2">
                <div className="w-container banner-box">
                    <div className="banner-detail know">
                        <img className="banner-icon" alt ="knowledge" src={process.env.PUBLIC_URL + 'img/knowledge.svg'}></img>
                        <div className="text">Knowledge increase by sharing,<br></br>but
                            not by saving.
                        </div></div>
                    <img className="img-banner" alt ="knowledge" src={process.env.PUBLIC_URL + 'img/bg-knowledge.svg'}></img></div>
            </div>
            <div className="w-container feed pt-3">
                <div id="feed">
                </div>
            </div>
        </React.Fragment>
    );
}
export default Knowledge;