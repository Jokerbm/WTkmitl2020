import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
function Home() {
    return (
        <div className="home th-font2">
            <div class="feed-cover">
                <div class="feed-cover bg"></div>
                <Navigation />
            </div>
            <div class="w-section section-content">
                <div class="w-container feed">
                    <button tabindex="-1" class="feed-card tool-create bt1">
                        <div class="icon-create"></div>
                        <div class="tool-create-title">TELL YOUR STORY</div>
                    </button>
                    <div class="w-clearfix profile-category tabfeed">
                        <a class="" href="/"><button class="profile-category-tabs half action">STAFF PICKS</button></a>
                        <a class="" href="/"><button class="profile-category-tabs half">READLIST</button></a>
                    </div>
                    <div>
                        <div id="feedHighlight">
                            {/* information about blog */}
                            <div id="feed">
                                <div class="feed-card highlight bb" style={{backGroundImage: "url(" + "https://s3-ap-southeast-1.amazonaws.com/media.storylog/storycontent/5ce1a28eea6506315f65db68/16036648996358347060.jpg" + ")"}}>
                                    <div class="feed-highlight-badge-box"></div>
                                    <div class="w-clearfix feed-card inheightlight animated fadeIn">
                                        <img class="img-feed-highlight" src="https://s3-ap-southeast-1.amazonaws.com/media.storylog/storycontent/5ce1a28eea6506315f65db68/16036648996358347060.jpg" width="100%"></img>
                                        <div class="feed-info nobg highlight">
                                            <div class="w-clearfix feed-type">
                                                <div class="feed-badge-small staffpick"></div>
                                                <a class="" href="/category/shortstory">
                                                    <img height="30px" src="/assets/1N83gyP.svg"></img></a>
                                            </div>
                                            <a href="/story/5ce1a28eea6506315f65db68">
                                                <div class="feed-info-title">เธอ ร่างบิดเบี้ยว และแสงแดดจ้าตอน 2 ทุ่ม 15 นาที</div>
                                                <div class="feed-info-detail">  ในที่สุดผมก็ร่วงหล่นไร้การหยิบจับ หลังจากพยายามเหนี่ยวรั้งให้ยึดโยงเลียนแบบสิ่งสวยงามที่ถูกสรรค์สร้างโดยธรรมชาติ หรือแม้กระทั่งโดยผู้คน ทันใดก็พังทลายลงมาเป็นเศษเสี้...</div>
                                            </a>
                                            <div class="w-clearfix feed-info-point">
                                                <div class="text">
                                                    <span>1 day ago</span><span>&nbsp;&nbsp;</span>
                                                </div>
                                                <span><span>|&nbsp;&nbsp;</span>
                                                <div class="text orange">
                                                    <span>2</span><span>&nbsp;</span>
                                                </div>
                                                <div class="text">recommended</div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* information about blog */}
                            {/* information about blog */}
                            <div id="feed">
                                <div class="feed-card highlight bb" style={{backGroundImage: "url(" + "https://s3-ap-southeast-1.amazonaws.com/media.storylog/storycontent/5ce1a28eea6506315f65db68/16036648996358347060.jpg" + ")"}}>
                                    <div class="feed-highlight-badge-box"></div>
                                    <div class="w-clearfix feed-card inheightlight animated fadeIn">
                                        <img class="img-feed-highlight" src="https://s3-ap-southeast-1.amazonaws.com/media.storylog/storycontent/5ce1a28eea6506315f65db68/16036648996358347060.jpg" width="100%"></img>
                                        <div class="feed-info nobg highlight">
                                            <div class="w-clearfix feed-type">
                                                <div class="feed-badge-small staffpick"></div>
                                                <a class="" href="/category/shortstory">
                                                    <img height="30px" src="/assets/1N83gyP.svg"></img></a>
                                            </div>
                                            <a href="/story/5ce1a28eea6506315f65db68">
                                                <div class="feed-info-title">เธอ ร่างบิดเบี้ยว และแสงแดดจ้าตอน 2 ทุ่ม 15 นาที</div>
                                                <div class="feed-info-detail">  ในที่สุดผมก็ร่วงหล่นไร้การหยิบจับ หลังจากพยายามเหนี่ยวรั้งให้ยึดโยงเลียนแบบสิ่งสวยงามที่ถูกสรรค์สร้างโดยธรรมชาติ หรือแม้กระทั่งโดยผู้คน ทันใดก็พังทลายลงมาเป็นเศษเสี้...</div>
                                            </a>
                                            <div class="w-clearfix feed-info-point">
                                                <div class="text">
                                                    <span>1 day ago</span><span>&nbsp;&nbsp;</span>
                                                </div>
                                                <span><span>|&nbsp;&nbsp;</span>
                                                <div class="text orange">
                                                    <span>2</span><span>&nbsp;</span>
                                                </div>
                                                <div class="text">recommended</div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* information about blog */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Home;
