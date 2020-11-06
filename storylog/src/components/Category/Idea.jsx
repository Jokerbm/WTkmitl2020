import React from "react";
import LatestPopularBorder from "../Latestpopularboarder";
import Navigation from "../Navigation";

function Idea(){
    return (
        <React.Fragment>
            <Navigation/>
            <div className="banner idea th-font2">
                <div className="w-container banner-box">
                    <div className="banner-detail idea">
                        <img className="banner-icon" src={process.env.PUBLIC_URL + 'img/idea.svg'}></img>
                        <div className="text">It begin with an idea and then it<br></br>becomes
                            something else.
                        </div></div>
                    <img className="img-banner" src={process.env.PUBLIC_URL + 'img/bg-idea.svg'}></img></div>
            </div>
            <div className="w-container feed pt-3">
                <div id="feed">
                    <LatestPopularBorder/>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Idea;