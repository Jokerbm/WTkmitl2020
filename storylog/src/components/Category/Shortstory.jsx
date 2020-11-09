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
        if(props.category == "short story") {
            return rows.push(<Latestpopularboarder key={data.recommended} {...props}/>);
        }
    })
    console.log(rows)
    return rows;
}

class ShortStory extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                <Navigation/>
                <div className="banner short th-font2">
                    <div className="w-container banner-box">
                        <div className="banner-detail short">
                            <img className="banner-icon" alt="shortstory"
                                 src={process.env.PUBLIC_URL + 'img/shortstory.svg'}></img>
                            <div className="text">Short stories are tiny windows into
                                other worlds and other minds and other dreams.
                            </div>
                        </div>
                        <img className="img-banner" alt="shortstory"
                             src={process.env.PUBLIC_URL + 'img/bg-shortstory.svg'}></img></div>
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
export default ShortStory;
