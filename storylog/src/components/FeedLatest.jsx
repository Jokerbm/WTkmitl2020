import React from "react";
import Navigation from "./Navigation";
import data from "./Article.json";
import Latestpopularboarder from "./Latestpopularboarder";
import moment from "moment";
function body() {
    let rows = [];
    const getdata = data.map(data => {
        let props = {
            banner: data.banner,
            subject: data.subject,
            intro: data.intro,
            time: moment(data.time,'YYYY-MM-DD HH:mm:ss').fromNow(),
            recommended: data.recommended,
            name: data.name,
            nickname: data.nickname,
            image_profile: data.image_profile,
            category: data.category,
            img_cate:data.img_cate,
            advice:data.advice,
            id: data.id
        }
        if(!props.advice) {
            return rows.push(<Latestpopularboarder key={data.id} {...props}/>);
        }
    })
    console.log(rows)
    return rows;
}
function FeedLatest() {
    return (
        <React.Fragment>
            <div className="home th-font2">
                <div class="feed-cover">
                    <div class="feed-cover bg"></div>
                    <Navigation feed="true"/>
                </div>
                <div class="w-section section-content">
                    <div class="w-container feed">
                        <button tabindex="-1" class="feed-card tool-create bt1">
                            <div class="icon-create"></div>
                            <div class="tool-create-title" data-toggle="modal" data-target="#exampleModal">TELL YOUR STORY</div>
                        </button>
                        <div class="w-clearfix profile-category tabfeed">
                            <a class="" href="#/feed/latest"><button class="profile-category-tabs half action"><b>LATEST STORIES</b></button></a>
                            <a class="" href="#/feed/popular"><button class="profile-category-tabs half "><b>POPULAR</b></button></a>
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
