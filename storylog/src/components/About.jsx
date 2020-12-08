import React from "react";
import Navigation from "./Navigation";
import Loading from "./Loading";

class About extends React.Component {

    state = {
        test: [],
        loading: true
    }

    componentDidMount() {
        fetch('http://localhost:8080/allusers').then((response) => response.json())
        .then((responseJson) => {
            responseJson.map(data => {
                let author = {
                    image_banner: data.image_banner,
                    image_profile: data.image_profile,
                    status: data.status,
                    stories: data.stories,
                    recommended: data.recommended,
                    name: data.name,
                    nickname: data.nickname,
                    followers: data.followers,
                    following: data.following
                }
                if (this.props.match.params.id === author.name) {
                    console.log("canuse")
                    this.setState({author, loading: false})
                }
                return null
            })
        })
       
    }

    render() {

        if (this.state.loading) {
            return <Loading/>
        }
        return (
            <div className="home th-font2">

                <Navigation/>
                <div className="bg-fix profile-cover"
                     style={{backgroundImage: 'url(' + this.state.author.image_banner + ')'}}>
                </div>
                <div className="w-container profile-detail">
                    <div className="profile-user">
                        <div className="cc profile-user-image_user"
                             style={{backgroundImage: 'url(' + this.state.author.image_profile + ')'}}></div>

                        <div className="profile-user-name">{this.state.author.name}</div>
                        <div className="profile-user-role">{this.state.author.nickname}</div>
                        <div className="profile-detail-content">
                            <div className="bb w-clearfix button follow" data-toggle="modal" data-target="#exampleModal">
                                <div className="icon-follow"></div>
                                <div className="text">Follow</div>
                            </div>
                            <div className="bb w-clearfix button message" data-toggle="modal" data-target="#exampleModal">
                                <div className="icon-message"></div>
                                <div className="text">Message</div>
                            </div>

                            <div className="w-clearfix">
                                <div className="text profile-text">{this.state.author.status}</div>
                            </div>
                            <div className="w-clearfix"></div>
                            <div className="profile-analytic">
                                <div className="w-clearfix profile-analytic-point">
                                    <div className="profile-analytic-point_point">{this.state.author.stories}</div>
                                    <div className="text">Stories</div>
                                </div>
                                <div className="w-clearfix bb-noshadow profile-analytic-point center">
                                    <div className="profile-analytic-point_point">{this.state.author.followers}</div>
                                    <div className="text">Followers</div>
                                </div>
                                <div className="w-clearfix bb-noshadow profile-analytic-point">
                                    <div className="profile-analytic-point_point">{this.state.author.following}</div>
                                    <div className="text">Following</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default About;