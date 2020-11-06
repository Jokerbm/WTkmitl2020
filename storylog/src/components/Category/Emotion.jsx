import React from "react";
import LatestPopularBorder from "../Latestpopularboarder";
import Navigation from "../Navigation";

function Emotion(){
    return (
        <React.Fragment>
            <Navigation/>
            <div className="banner emo th-font2">
                <div className="w-container banner-box">
                    <div className="banner-detail short">
                        <img className="banner-icon" alt={"emotion"} src={process.env.PUBLIC_URL + 'img/emotion.svg'}></img>
                        <div className="text">Poetry is when an emotion has found its thought and the thought has found words.
                        </div></div>
                    <img className="img-banner" alt={"emotion"} src={process.env.PUBLIC_URL + 'img/bg-emotion.svg'}></img></div>
            </div>
            <div className="w-container feed pt-3">
                <div id="feed">
                    <LatestPopularBorder/>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Emotion;