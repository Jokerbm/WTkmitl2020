import React from "react";
import Navigation from "./Navigation";
import data from "./Article.json";
import Latestpopularboarder from "./Latestpopularboarder";
import moment from "moment";

function body() {
    let rows = [];
    data.map(data => {
        let props = {
            tag: data.tag,
            banner: data.banner,
            subject: data.subject,
            intro: data.intro,
            time: moment(data.time, 'YYYY-MM-DD HH:mm:ss').fromNow(),
            recommended: data.recommended,
            name: data.name,
            nickname: data.nickname,
            image_profile: data.image_profile,
            category: data.category,
            img_cate: data.img_cate,
            advice: data.advice,
            id: data.id,
            paragraph: data.paragraph
        }
        if (!props.advice) {
            return rows.push(<Latestpopularboarder key={data.id} {...props}/>);
        }
        return null
    })
    return rows;
}

function FeedLatest() {
    return (
        <React.Fragment>
            <div className="home th-font2">
                <div className="feed-cover">
                    <div className="feed-cover bg"></div>
                    <Navigation feed="true"/>
                </div>
                <div className="w-section section-content">
                    <div className="w-container feed">
                        <button tabIndex="-1" className="feed-card tool-create bt1">
                            <div className="icon-create"></div>
                            <div className="tool-create-title" data-toggle="modal" data-target="#exampleModal">TELL YOUR
                                STORY
                            </div>
                        </button>
                        <div className="w-clearfix profile-category tabfeed">
                            <a className="" href="#/feed/latest">
                                <button className="profile-category-tabs half action"><b>LATEST STORIES</b></button>
                            </a>
                            <a className="" href="#/feed/popular">
                                <button className="profile-category-tabs half "><b>POPULAR</b></button>
                            </a>
                        </div>
                        <br></br><br></br><br></br><br></br>
                        <div>
                            <div id="feedHighlight">
                                {/* information about blog */}
                                {body()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}

export default FeedLatest;
