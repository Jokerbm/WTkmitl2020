import React from "react";
import Navigation from "./Navigation";


function Loading() {
    return (
        <div className="home th-font2">
            <div className="feed-cover404">
                <Navigation/>
            </div>
            <div id="body-content">
                <div>
                    <div className="notfound-bg bg"></div>
                    <div className="notfound-bg"></div>
                    <div className="w-container content">
                        <div className="notfound-content th-font2">
                            <h1><b>Loading </b></h1>
                            <h3><b>ขออภัย กำลังดึงข้อมูลจาก DB</b></h3><a className="" href="/">
                            <div className="bb button notfound-read-other">Please Wait
                            </div>
                        </a></div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Loading;