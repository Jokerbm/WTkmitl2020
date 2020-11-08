import React from "react";
import Navigation from "./Navigation";
import Latestpopularboarder from "./Latestpopularboarder";

function InsideReadlist() {
    return (
        <div className="home th-font2">
            <Navigation/>
            <div className="w-container feed">
                <div>
                    <div id="bookDetail">
                        <div className="feed-card highlight book">
                            <div className="bookBgBlank"></div>
                            <div>
                                <img src={process.env.PUBLIC_URL + 'img/pogemon.jpg'} style={{width:"100%"}}></img>
                            </div>
                            <div className="w-clearfix book-bg">
                                <div className="w-clearfix whit feed-card inheightlight book">
                                    <div className="w-clearfix readlist-box">
                                        <a className href="/readlist">
                                            <div className="profile-user-image_user book readList"></div>
                                        </a>
                                        <div className="readListtitle"><b>อ่านรอโปเกม่อนเกิด</b></div>
                                        <div className="readListpoint">
                                            <div className="text">
                                                <span>Published&nbsp;&nbsp;</span>
                                                <span>4 years ago</span>
                                                <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                                                <span>10</span><span>&nbsp;</span>
                                                <span>stories</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-clearfix book-detail">
                                <div className="readlist-detail book">วินาทีนี้คงมีน้อยคนนักที่ไม่รู้จักเกมสุดดังอย่าง
                                    pokemon go ตัวการ์ตูนที่ใครหลายคนเติบโตมากับมัน
                                    ปรากฏการณ์โปเกม่อนฟีเวอร์นี้อาจมีมุมมองอะไรแปลกใหม่น่าสนใจขนาดไหนเมื่อมองผ่านสายตาของนักเขียนใน
                                    storylog กันนะ พักจากการจับโปเกมม่อนเมื่อไร ลองให้ 10 เรื่องราวเกียวกับโปเกม่อนใน
                                    Readlist นี้ของเราช่วยให้อินมากกว่าเดิมกันนะ :D
                                </div>
                                <div className="profile-analytic share">
                                    <div className="profile-analytic-point share">
                                        <div className="text-share-book">SHARE TO
                                        </div>
                                    </div>
                                    <div className="profile-analytic-point share"><a
                                        href="https://www.facebook.com/sharer/sharer.php?u=https://storylog.co/readlist/57aaf11ef3ec36b3c2558ca1"
                                        target="_blank">
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
                    <div id="feed">
                        <Latestpopularboarder/>
                    </div>
                </div>
        </div>
        </div>
    );
}
export default InsideReadlist;
