import React from "react";
import Navigation from "./Navigation";


function Notfound() {
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
                            <h1><b>Oop! an error had occurred.</b></h1>
                            <h3><b>ขออภัย ไม่พบหน้าที่คุณต้องการ</b></h3><a className="" href="/">
                            <div className="bb button notfound-read-other">READ
                                OTHER STORY
                            </div>
                        </a></div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Notfound;