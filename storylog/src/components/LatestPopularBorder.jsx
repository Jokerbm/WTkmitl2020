import React from "react";

function LatestPopularBorder(){
    return (
        <div className="bb w-clearfix feed-card animated fadeIn th-font2">
            <div className="feed-info bg-linear">
                {/*ใส่ bg ได้ตรงนี้*/}
                <div className="w-clearfix feed-type">
                    <a className="" href="/category/emotion"><img
                    height="30px" src={process.env.PUBLIC_URL + 'img/emotion.svg'}></img>
                    </a>
                </div>
                <a href="/story/5d90f5a997dcd98c47e93631">
                    <div className="feed-info-title"><b>Everything will
                        be okay :-)</b>
                    </div>
                    <div className="feed-info-detail">เหมือนเดิม
                        ทุกอย่างยังเหมือนเดิม ใช้ชีวิตแบบเดิมๆ ไม่มีอะไรเพิ่มเติม ไม่มีใคร คิดว่าตัวเองเข็มแข็ง
                        แต่ความจริงแล้วก็ไม่ แต่ก็ไม่เป็นไร ใช้ชีวิตของเราต่อไปบนเส้นทางที...
                    </div>
                </a>
                <div className="w-clearfix feed-info-point">
                    <div className="text"><span>22 hours ago</span><span>&nbsp;&nbsp;</span></div>
                    <span><span>|&nbsp;&nbsp;</span><div className="text orange"><span>6</span><span>&nbsp;</span></div>
                        <div className="text">recommended</div></span>
                </div>
            </div>

            <div className="w-clearfix feed-profile hightlight">
                <a className="" href="/kxnuz">
                    <div className="feed-profile-img highlight img-bg" style={{backgroundImage: "url(" + "https://s3-ap-southeast-1.amazonaws.com/media.storylog/usercontent/5f267fdea834c3fc0123ab15/15963591366138532840.jpg" + ")"
                    }}></div>
                    <div className="feed-info-username highlight">kxnuz
                    </div>
                    <div className="feed-info-role highlight">Dreamer</div>
                </a>
            </div>
        </div>
    );
}

export default LatestPopularBorder;
