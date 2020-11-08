import React from "react";
import Navigation from "./Navigation";
import ReadListBorder from "./ReadListBorder";
function body(){
    let rows = [];
    for (let i = 0; i < 10; i++) {
        rows.push(<ReadListBorder />);
    }
    return rows;
}
function Readlist() {
    return (
        <React.Fragment>
            <div className="home th-font2">
                <div class="feed-cover">
                    <div class="feed-cover bg"></div>
                    <Navigation />
                </div>
                <div class="w-section section-content">
                    <div class="w-container feed">
                        <button tabindex="-1" class="feed-card tool-create bt1">
                            <div class="icon-create"></div>
                            <div class="tool-create-title" data-toggle="modal" data-target="#exampleModal">TELL YOUR STORY</div>
                        </button>
                        <div class="w-clearfix profile-category tabfeed">
                            <a class="" href="/"><button class="profile-category-tabs half "><b>STAFF PICKS</b></button></a>
                            <a class="" href="#/readlist"><button class="profile-category-tabs half action"><b>READLIST</b></button></a>
                        </div>
                        <br></br><br></br><br></br><br></br>
                        <div>
                            <div id="feedHighlight">
                                {/* information about blog */}
                                {body()}
                                {/* information about blog */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}
export default Readlist;
