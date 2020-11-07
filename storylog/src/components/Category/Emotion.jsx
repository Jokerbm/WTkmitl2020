import React from "react";
import LatestPopularBorder from "../Latestpopularboarder";
import Navigation from "../Navigation";
import StaffPickBorder from "../StaffPickBorder";
import data from "../Article.json";

function body() {
    let rows = [];
    const getdata = data.map(data => {
        let props = {
            id:data.id,
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
        if(props.category == "emotion") {
            return rows.push(<StaffPickBorder key={data.recommended} {...props}/>);
        }
    })
    console.log(rows)
    return rows;
}
class Emotion extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                <Navigation/>
                <div className="banner emo th-font2">
                    <div className="w-container banner-box">
                        <div className="banner-detail short">
                            <img className="banner-icon" alt={"emotion"}
                                 src={process.env.PUBLIC_URL + 'img/emotion.svg'}></img>
                            <div className="text">Poetry is when an emotion has found its thought and the thought has
                                found words.
                            </div>
                        </div>
                        <img className="img-banner" alt={"emotion"}
                             src={process.env.PUBLIC_URL + 'img/bg-emotion.svg'}></img></div>
                </div>
                <div className="w-container feed pt-3">
                    <div id="feed">
                        {body()}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Emotion;