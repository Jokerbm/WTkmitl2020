import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import StaffPickBorder from "./StaffPickBorder";
import ReadListBorder from "./ReadListBorder";
import LatestPopularBorder from "./LatestPopularBorder";
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
                        <a class="" href="/"><button class="profile-category-tabs half action"><b>STAFF PICKS</b></button></a>
                        <a class="" href="/"><button class="profile-category-tabs half"><b>READLIST</b></button></a>
                    </div>
                    <br></br><br></br><br></br><br></br>
                    <div>
                        <div id="feedHighlight">
                            {/* information about blog */}
                            <StaffPickBorder/>
                            <StaffPickBorder/>
                            <ReadListBorder />
                            <ReadListBorder />
                            <LatestPopularBorder />
                            <LatestPopularBorder />
                            {/* information about blog */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Home;

// <div id="feed">
//     <div className="feed-card highlight bb"
//          style={{backGroundImage: "url(" + "https://s3-ap-southeast-1.amazonaws.com/media.storylog/storycontent/5ce1a28eea6506315f65db68/16036648996358347060.jpg" + ")"}}>
//         <div className="feed-highlight-badge-box"></div>
//         <div className="w-clearfix feed-card inheightlight animated fadeIn">
//             <img className="img-feed-highlight"
//                  src="https://s3-ap-southeast-1.amazonaws.com/media.storylog/storycontent/5ce1a28eea6506315f65db68/16036648996358347060.jpg"
//                  width="100%"></img>
//             <div className="feed-info nobg highlight">
//                 <div className="w-clearfix feed-type">
//                     <div className="feed-badge-small staffpick"></div>
//                     <a className="" href="/category/shortstory">
//                         <img height="30px" src="/assets/1N83gyP.svg"></img></a>
//                 </div>
//                 <a href="/story/5ce1a28eea6506315f65db68">
//                     <div className="feed-info-title">เธอ ร่างบิดเบี้ยว และแสงแดดจ้าตอน 2 ทุ่ม 15 นาที</div>
//                     <div className="feed-info-detail"> ในที่สุดผมก็ร่วงหล่นไร้การหยิบจับ
//                         หลังจากพยายามเหนี่ยวรั้งให้ยึดโยงเลียนแบบสิ่งสวยงามที่ถูกสรรค์สร้างโดยธรรมชาติ
//                         หรือแม้กระทั่งโดยผู้คน ทันใดก็พังทลายลงมาเป็นเศษเสี้...
//                     </div>
//                 </a>
//                 <div className="w-clearfix feed-info-point">
//                     <div className="text">
//                         <span>1 day ago</span><span>&nbsp;&nbsp;</span>
//                     </div>
//                     <span><span>|&nbsp;&nbsp;</span>
//                                                 <div className="text orange">
//                                                     <span>2</span><span>&nbsp;</span>
//                                                 </div>
//                                                 <div className="text">recommended</div>
//                                                 </span>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// {/* information about blog */
// }
// {/* information about blog */
// }
// <div id="feed">
//     <div className="feed-card highlight bb"
//          style={{backGroundImage: "url(" + "https://s3-ap-southeast-1.amazonaws.com/media.storylog/storycontent/5ce1a28eea6506315f65db68/16036648996358347060.jpg" + ")"}}>
//         <div className="feed-highlight-badge-box"></div>
//         <div className="w-clearfix feed-card inheightlight animated fadeIn">
//             <img className="img-feed-highlight"
//                  src="https://s3-ap-southeast-1.amazonaws.com/media.storylog/storycontent/5ce1a28eea6506315f65db68/16036648996358347060.jpg"
//                  width="100%"></img>
//             <div className="feed-info nobg highlight">
//                 <div className="w-clearfix feed-type">
//                     <div className="feed-badge-small staffpick"></div>
//                     <a className="" href="/category/shortstory">
//                         <img height="30px" src="/assets/1N83gyP.svg"></img></a>
//                 </div>
//                 <a href="/story/5ce1a28eea6506315f65db68">
//                     <div className="feed-info-title">เธอ ร่างบิดเบี้ยว และแสงแดดจ้าตอน 2 ทุ่ม 15 นาที</div>
//                     <div className="feed-info-detail"> ในที่สุดผมก็ร่วงหล่นไร้การหยิบจับ
//                         หลังจากพยายามเหนี่ยวรั้งให้ยึดโยงเลียนแบบสิ่งสวยงามที่ถูกสรรค์สร้างโดยธรรมชาติ
//                         หรือแม้กระทั่งโดยผู้คน ทันใดก็พังทลายลงมาเป็นเศษเสี้...
//                     </div>
//                 </a>
//                 <div className="w-clearfix feed-info-point">
//                     <div className="text">
//                         <span>1 day ago</span><span>&nbsp;&nbsp;</span>
//                     </div>
//                     <span><span>|&nbsp;&nbsp;</span>
//                                                 <div className="text orange">
//                                                     <span>2</span><span>&nbsp;</span>
//                                                 </div>
//                                                 <div className="text">recommended</div>
//                                                 </span>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
