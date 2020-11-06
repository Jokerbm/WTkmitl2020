import React from "react";
import Navigation from "./Navigation";
function About() {
  return (

      <div className="home th-font2">
        <Navigation />
        <div class="profile-cover"
             style={{ backgroundImage: "url(\"https://s3-ap-southeast-1.amazonaws.com/media.storylog/readlistcontent/57aaf11ef3ec36b3c2558ca1/cover.jpg\")" }}>
        </div>
        <div class="w-container profile-detail" >
          <div class="profile-user">
            <div class="profile-user-image_user" style={{ backgroundImage: "url(\"https://s3-ap-southeast-1.amazonaws.com/media.storylog/usercontent/5e56a440a1d6b666713dd5c7/16022734106659680676.jpg\")" }}></div>

            <div class="profile-user-name">OttoChain</div>
            <div class="profile-user-role">Tutor, Musician</div>
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
                <div class="text profile-text">“I’m the devil, I’m here to do the devil’s business”</div>
              </div>
              <div class="w-clearfix"></div>
              <div class="profile-analytic">
                <div class="w-clearfix profile-analytic-point">
                  <div class="profile-analytic-point_point">3</div>
                  <div class="text">Stories</div>
                </div>
                <div class="w-clearfix bb-noshadow profile-analytic-point center">
                  <div class="profile-analytic-point_point">10</div>
                  <div class="text">Followers</div>
                </div>
                <div class="w-clearfix bb-noshadow profile-analytic-point">
                  <div class="profile-analytic-point_point">5</div>
                  <div class="text">Following</div>
                </div>

              </div>
            </div>
          </div>
          <div class="w-clearfix profile-category">
            <a class="" href=""><button class="profile-category-tabs half action">STORIES</button></a>
            <a class="" href="#/book"><button class="profile-category-tabs half">BOOK</button></a>
          </div>
        </div>
        <div class="w-container feed">
          <div id="tabMainProfile">
            <div class="tabs">
              <div class="tabs-text first-no-border green">LATEST STORIES</div>
              <div class="tabs-text">MOST POPULAR</div>
              <div class="tabs-line"></div>
            </div>
            <div class="feed">
              {/* infomation */}
            </div>

        </div>
      </div>

  );
}

export default About;