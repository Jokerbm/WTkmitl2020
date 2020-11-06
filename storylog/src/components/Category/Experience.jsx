import React from "react";
import LatestPopularBorder from "../Latestpopularboarder";
import Navigation from "../Navigation";

function Experience(){
    return (
        <React.Fragment>
            <Navigation/>
            <div className="banner exp th-font2">
                <div className="w-container banner-box">
                    <div className="banner-detail exp">
                        <img className="banner-icon" src={process.env.PUBLIC_URL + 'img/experience.svg'}></img>
                        <div className="text">Every experience, good or bad,<br></br>is a
                            priceless collector’s item.
                        </div></div>
                    <img className="img-banner" src={process.env.PUBLIC_URL + 'img/bg-experience.svg'}></img></div>
            </div>
            <div className="w-container feed pt-3">
                <div id="feed">
                    <LatestPopularBorder/>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Experience;