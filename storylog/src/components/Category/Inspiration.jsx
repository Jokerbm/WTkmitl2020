import React from "react";
import Navigation from "../Navigation";
import data from "../Article.json";
import Latestpopularboarder from "../Latestpopularboarder";
import moment from "moment";

function body() {
    let rows = [];
    data.map(data => {
        let props = {
            id: data.id,
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
            tag: data.tag,
            paragraph: data.paragraph
        }
        if (props.category === "inspiration") {
            return rows.push(<Latestpopularboarder key={data.recommended} {...props}/>);
        }
        return null
    })
    console.log(rows)
    return rows;
}

class Inspiration extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <React.Fragment>
                <Navigation/>
                <div className="banner inspire th-font2">
                    <div className="w-container banner-box">
                        <div className="banner-detail inspire">
                            <img className="banner-icon" alt={"inspiration"}
                                 src={process.env.PUBLIC_URL + 'img/inspiration.svg'}></img>
                            <div className="text">No need to be perfect. Let people get
                                inspired by how you deal with your imperfections.
                            </div>
                        </div>
                        <img className="img-banner" alt={"inspiration"}
                             src={process.env.PUBLIC_URL + 'img/bg-inspiration.svg'}></img></div>
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

export default Inspiration;