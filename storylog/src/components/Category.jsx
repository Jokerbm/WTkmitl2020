import React from "react";
import LatestPopularBorder from "./LatestPopularBorder";
import Navigation from "./Navigation";

function Category(){
    return (
        <React.Fragment>
            <Navigation/>
        <div className="banner short th-font2">
            <div className="w-container banner-box">
                <div className="banner-detail short">
                    <img className="banner-icon" src={process.env.PUBLIC_URL + 'img/shortstory.svg'}></img>
                    <div className="text">Short stories are tiny windows into
                        other worlds and other minds and other dreams.
                    </div></div>
                <img className="img-banner" src={process.env.PUBLIC_URL + 'img/bg-Catestory.svg'}></img></div>
        </div>
            <div className="w-container feed pt-3">
            <div id="feed">
                <LatestPopularBorder/>
            </div>
            </div>
        </React.Fragment>
    );
}
export default Category;
