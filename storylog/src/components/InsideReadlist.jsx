import React from "react";
import Navigation from "./Navigation";
import Notfound from "./Notfound";
import data from "./Datareadlist.json";
import Latestpopularboarder from "./Latestpopularboarder";

class InsideReadlist extends React.Component {

    state = {
        test: [],
        loading: true
    }

    body() {
        let rows = [];
        data.map(data => {
            let props = {
                title: data.title,
                article: data.article,
            }
            if (this.props.match.params.id === props.title) {
                props.article.map(data => {
                    return rows.push(<Latestpopularboarder key={data.id} {...data}/>);
                })
            }
            return null
        })
        return rows;
    }

    componentDidMount() {
        data.map(data => {
            let author = {
                title: data.title,
                detail: data.detail,
                state: data.state,
                bg: data.bg,
                article: data.article,
            }
            if (this.props.match.params.id === author.title) {
                this.setState({author, loading: false})
            }
            return null
        })
    }

    render() {

        if (this.state.loading) {
            return <Notfound/>
        }


        return (
            <div className="home th-font2">
                <Navigation/>
                <div className="w-container feed">
                    <div>
                        <div id="bookDetail">
                            <div className="feed-card highlight book">
                                <div className="bookBgBlank"></div>
                                <div>
                                    <img alt={"authorbaackgroud"} src={this.state.author.bg}
                                         style={{width: "100%"}}></img>
                                </div>
                                <div className="w-clearfix book-bg">
                                    <div className="w-clearfix whit feed-card inheightlight book">
                                        <div className="w-clearfix readlist-box">
                                            <a className href="/readlist">
                                                <div className="profile-user-image_user book readList"></div>
                                            </a>
                                            <div className="readListtitle"><b>{this.state.author.title}</b></div>
                                            <div className="readListpoint">
                                                <div className="text">
                                                    <span>{this.state.author.state}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-clearfix book-detail">
                                    <div className="readlist-detail book">{this.state.author.detail}
                                    </div>
                                    <div className="profile-analytic share">
                                        <div className="profile-analytic-point share">
                                            <div className="text-share-book">SHARE TO
                                            </div>
                                        </div>
                                        <div className="profile-analytic-point share"><a
                                            href="https://www.facebook.com/sharer/sharer.php?u=https://storylog.co/readlist/57aaf11ef3ec36b3c2558ca1"
                                            target="_blank" rel="noopener noreferrer">
                                            <div className="icon-facebook gray mini"></div>
                                        </a><a
                                            href="https://twitter.com/share?text=อ่านรอโปเกม่อนเกิด &amp;url=https://storylog.co/readlist/57aaf11ef3ec36b3c2558ca1">
                                            <div className="icon-twitter gray mini"></div>
                                        </a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="feed">
                        {this.body()}
                    </div>
                </div>
            </div>
        )
    }
}


export default InsideReadlist;
