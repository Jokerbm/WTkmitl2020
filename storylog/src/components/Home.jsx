import React from "react";
import Navigation from "./Navigation";
import StaffPickBorder from "./StaffPickBorder";
import data from "./Article.json";

function body() {
    let rows = [];
    const getdata = data.map(data => {
        let props = {
            banner: data.banner,
            subject: data.subject,
            intro: data.intro,
            time: data.time,
            recommended: data.recommended,
            name: data.name,
            nickname: data.nickname,
            image_profile: data.image_profile,
            category: data.category,
            img_cate:data.img_cate
        }
            return rows.push(<StaffPickBorder key={data.recommended} {...props}/>);
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
                    <Navigation />
                </div>
                <div className="w-section section-content">
                    <div className="w-container feed">
                        <button tabIndex="-1" className="feed-card tool-create bt1">
                            <div className="icon-create"></div>
                            <div
                                className="tool-create-title"
                                data-toggle="modal"
                                data-target="#exampleModal"
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
                                {/*<StaffPickBorder />*/}
                                {/*<StaffPickBorder />*/}
                                {/*<ReadListBorder />*/}
                                {/*<ReadListBorder />*/}
                                {/*<LatestPopularBorder />*/}
                                {/*<LatestPopularBorder />*/}
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