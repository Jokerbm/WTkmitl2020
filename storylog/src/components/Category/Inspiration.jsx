import React from "react";
import LatestPopularBorder from "../Latestpopularboarder";
import Navigation from "../Navigation";

function Inspiration(){
    return (
        <React.Fragment>
            <Navigation/>
            <div className="banner inspire th-font2">
                <div className="w-container banner-box">
                    <div className="banner-detail inspire">
                        <img className="banner-icon" src={process.env.PUBLIC_URL + 'img/inspiration.svg'}></img>
                        <div className="text">No need to be perfect. Let people get
                            inspired by how you deal with your imperfections.
                        </div></div>
                    <img className="img-banner" src={process.env.PUBLIC_URL + 'img/bg-inspiration.svg'}></img></div>
            </div>
            <div className="w-container feed pt-3">
                <div id="feed">
                    <LatestPopularBorder />
                </div>
            </div>
        </React.Fragment>
    );
}
export default Inspiration;