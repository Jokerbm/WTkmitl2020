import React from "react";
import Navigation from "./Navigation";
import data from "./Datareadlist.json";
import ReadListBorder from "./ReadListBorder";
function body(){
    let rows = [];
    data.map(data => {
        let props = {
            title:data.title,
            detail:data.detail,
            bg:data.bg
        }
            return rows.push(<ReadListBorder key={data.title} {...props}/>);
    })
    return rows;
}
function Readlist() {
    return (
        <React.Fragment>
            <div className="home th-font2">
                <div className="feed-cover">
                    <div className="feed-cover bg"></div>
                    <Navigation home="true"/>
                </div>
                <div className="w-section section-content">
                    <div className="w-container feed">
                        <button tabIndex="-1" className="feed-card tool-create bt1">
                            <div className="icon-create"></div>
                            <div className="tool-create-title" data-toggle="modal" data-target="#exampleModal">TELL YOUR STORY</div>
                        </button>
                        <div className="w-clearfix profile-category tabfeed">
                            <a className="" href="/"><button className="profile-category-tabs half "><b>STAFF PICKS</b></button></a>
                            <a className="" href="#/readlist"><button className="profile-category-tabs half action"><b>READLIST</b></button></a>
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
