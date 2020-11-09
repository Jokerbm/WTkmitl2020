import React from "react";
import Navigation from "../Navigation";
import data from "../Article.json";
import Latestpopularboarder from "../Latestpopularboarder";
import moment from "moment";

function body() {
    let rows = [];
    const getdata = data.map(data => {
        let props = {
            id:data.id,
            banner: data.banner,
            subject: data.subject,
            intro: data.intro,
            time: moment(data.time,'YYYY-MM-DD HH:mm:ss').fromNow(),
            recommended: data.recommended,
            name: data.name,
            nickname: data.nickname,
            image_profile: data.image_profile,
            category: data.category,
            img_cate:data.img_cate
        }
        if(props.category == "experience") {
            return rows.push(<Latestpopularboarder key={data.recommended} {...props}/>);
        }
    })
    console.log(rows)
    return rows;
}
class Experience extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
        <React.Fragment>
            <Navigation/>
            <div className="banner exp th-font2">
                <div className="w-container banner-box">
                    <div className="banner-detail exp">
                        <img className="banner-icon" alt ="experience" src={process.env.PUBLIC_URL + 'img/experience.svg'}></img>
                        <div className="text">Every experience, good or bad,<br></br>is a
                            priceless collector’s item.
                        </div></div>
                    <img className="img-banner" alt ="experience" src={process.env.PUBLIC_URL + 'img/bg-experience.svg'}></img></div>
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
export default Experience;