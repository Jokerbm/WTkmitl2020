import React from "react";
import LatestPopularBorder from "./LatestPopularBorder";
import Navigation from "./Navigation";

function Experience(){
    return (
        <React.Fragment>
            <Navigation/>
            <div className="banner short th-font2">
                <div className="w-container banner-box">
                    <div className="banner-detail short">
                        <img className="banner-icon" src={process.env.PUBLIC_URL + 'img/experience.svg'}></img>
                        <div className="text">Poetry is when an emotion has found its thought and the thought has found words.
                        </div></div>
                    <img className="img-banner" src={process.env.PUBLIC_URL + 'img/bg-shortstory.svg'}></img></div>
            </div>
            <div className="w-container feed pt-3">
                <div id="feed">
                    <LatestPopularBorder/>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Experience();