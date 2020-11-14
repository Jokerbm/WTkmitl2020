import React from "react";
import Navigation from "./Navigation";
import Notfound from "./Notfound";
import data from "./profile.json";

import moment from "moment";
import ProfileBorder from "./ProfileBorder";
class About extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    test: [],
    loading: true
  }
  componentDidMount() {
    const getdata = data.map(data => {
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
      if(this.props.match.params.id == author.name){
        this.setState({author, loading: false})
      }
    })
  }

  render() {

    if(this.state.loading) {
      return <Notfound />
    }
    return (
        <div className="home th-font2">

          <Navigation/>
          <div className="bg-fix profile-cover" style={{backgroundImage: 'url(' + this.state.author.image_banner + ')'}}>
          </div>
          <div class="w-container profile-detail">
            <div class="profile-user">
              <div class="cc profile-user-image_user"
                   style={{backgroundImage: 'url(' + this.state.author.image_profile + ')'}}></div>

              <div class="profile-user-name">{this.state.author.name}</div>
              <div class="profile-user-role">{this.state.author.nickname}</div>
              <div class="profile-detail-content">
                <div class="bb w-clearfix button follow" data-toggle="modal" data-target="#exampleModal">
                  <div class="icon-follow"></div>
                  <div class="text">Follow</div>
                </div>
                <div class="bb w-clearfix button message" data-toggle="modal" data-target="#exampleModal">
                  <div class="icon-message"></div>
                  <div class="text">Message</div>
                </div>

                <div class="w-clearfix">
                  <div class="text profile-text">{this.state.author.status}</div>
                </div>
                <div class="w-clearfix"></div>
                <div class="profile-analytic">
                  <div class="w-clearfix profile-analytic-point">
                    <div class="profile-analytic-point_point">{this.state.author.stories}</div>
                    <div class="text">Stories</div>
                  </div>
                  <div class="w-clearfix bb-noshadow profile-analytic-point center">
                    <div class="profile-analytic-point_point">{this.state.author.followers}</div>
                    <div class="text">Followers</div>
                  </div>
                  <div class="w-clearfix bb-noshadow profile-analytic-point">
                    <div class="profile-analytic-point_point">{this.state.author.following}</div>
                    <div class="text">Following</div>
                  </div>

                </div>
              </div>
            </div>
          {/*  <div class="w-clearfix profile-category">*/}
          {/*    <a class="" href="">*/}
          {/*      <button class="profile-category-tabs half action">STORIES</button>*/}
          {/*    </a>*/}
          {/*    <a class="" href="#/book">*/}
          {/*      <button class="profile-category-tabs half">BOOK</button>*/}
          {/*    </a>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div class="w-container feed">*/}
            {/*<div id="tabMainProfile">*/}
            {/*  <div class="tabs">*/}
            {/*    <div class="tabs-text first-no-border green">LATEST STORIES</div>*/}
            {/*    <div class="tabs-text">MOST POPULAR</div>*/}
            {/*    <div class="tabs-line"></div>*/}
            {/*  </div>*/}
            {/*  <div class="feed">*/}
            {/*    /!* infomation *!/*/}
            {/*    <ProfileBorder/>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
    );
  }
}


export default About;