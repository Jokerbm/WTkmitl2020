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
        if (props.category === "idea") {
            return rows.push(<Latestpopularboarder key={data.recommended} {...props}/>);
        }
        return null
    })
    console.log(rows)
    return rows;
}

class Idea extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <React.Fragment>
                <Navigation/>
                <div className="banner idea th-font2">
                    <div className="w-container banner-box">
                        <div className="banner-detail idea">
                            <img className="banner-icon" alt={"idea"}
                                 src={process.env.PUBLIC_URL + '/img/idea.svg'}></img>
                            <div className="text">It begin with an idea and then it<br></br>becomes
                                something else.
                            </div>
                        </div>
                        <img className="img-banner" alt={"idea"} src={process.env.PUBLIC_URL + '/img/bg-idea.svg'}></img>
                    </div>
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

export default Idea;