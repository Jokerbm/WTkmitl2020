import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Navigation from "./Navigation";
import StaffPickBorder from "./StaffPickBorder";
import data from "./Article.json";
import moment from "moment";
import Loading from "./Loading";
    

class Home extends React.Component {
    state = {
        test: [],
        items: Array.from({length: 20}),
        hasMore: true,
        loading: true
    }

    componentDidMount() {
        let rows = [];
        fetch('http://localhost:8080/allStorys').then((response) => response.json())
        .then((responseJson) => {
            responseJson.map(data => {
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
                if(props.advice == true){
                rows.push(props);
                }
            })
            this.setState({rows,loading: false,hasMore: true,
                loading: false})
        })
       
    }

    fetchMoreData = () => {
        if (this.state.items.length >= 90) {
            this.setState({hasMore: false});
            return;
        }
        // a fake async api call like which sends
        // 20 more records in .5 secs
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(Array.from({length: 20}))
            });
        }, 500);
    };

    render() {
        if (this.state.loading) {
            return <Loading/>
        }
        return (
            <React.Fragment>
                
                <div className="home th-font2">
                    <div className={"feed-cover"}>
                        <div className="feed-cover bg"></div>
                        <Navigation home="true"/>
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
                                <a className="" href="#/">
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
                                    <InfiniteScroll
                                        dataLength={this.state.items.length}
                                        next={this.fetchMoreData}
                                        hasMore={this.state.hasMore}
                                        loader={<h4>Loading...</h4>}
                                        endMessage={
                                            <p style={{textAlign: "center"}}>
                                                <b>Yay! You have seen it all</b>
                                            </p>
                                        }
                                    >
                                        {this.state.items.map((i, index) => (
                                            data[index].advice ? <div key={index}>
                                                <StaffPickBorder key={this.state.rows[index].id} {...this.state.rows[index]}/>
                                            </div> : null

                                        ))}
                                    </InfiniteScroll>
                                    {/* information about blog */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
}

export default Home;