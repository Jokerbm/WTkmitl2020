import React from "react";
import Navigation from "./Navigation";
import StaffPickBorder from "./StaffPickBorder";
import data from "./Article.json";
import moment from 'moment'

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
            advice:data.advice
        }
        if(props.advice) {
            return rows.push(<StaffPickBorder key={data.recommended} {...props}/>);
        }
    })
    console.log(rows)
    return rows;
}
function Home() {
    return (
        <React.Fragment>
            <div className="home th-font2">
                <div className="feed-cover">
                    <div className="feed-cover bg"></div>
                    <Navigation home="true" />
                </div>
                <div className="w-section section-content">
                    <div className="w-container feed">
                        <button tabIndex="-1" className="feed-card tool-create bt1" data-toggle="modal"
                                data-target="#exampleModal">
                            <div className="icon-create"></div>
                            <div
                                className="tool-create-title"
                            >
                                TELL YOUR STORY
                            </div>
                        </button>
                        <div className="w-clearfix profile-category tabfeed">
                            <a className="" href="/">
                                <button className="profile-category-tabs half action">
                                    <b>STAFF PICKS</b>
                                </button>
                            </a>
                            <a className="" href="#/readlist">
                                <button className="profile-category-tabs half">
                                    <b>READLIST</b>
                                </button>
                            </a>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
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
export default Home;