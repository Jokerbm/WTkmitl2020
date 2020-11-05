import React from "react";

function StaffPickBorder() {
    return (
        <React.Fragment>
            <div className="feed-card highlight bb th-font2"
                 style={{backgroundImage: "url(\"https://s3-ap-southeast-1.amazonaws.com/media.storylog/storycontent/5f950c226e9410c804d16e6b/16036036780054305493.jpg\")"
                 }}>
                <div className="feed-highlight-badge-box"></div>
                <div className="w-clearfix feed-card inheightlight animated fadeIn staffpick">
                    <img className="img-feed-highlight" alt={"tag"} src={process.env.PUBLIC_URL + 'img/tag.svg'}></img>
                    <div className="feed-info nobg highlight">
                        <div className="w-clearfix feed-type">
                            <div className="feed-badge-small staffpick"></div>
                            <a className="" href="/category/shortstory">
                                <img height="30px" alt={"experience"} src={process.env.PUBLIC_URL + 'img/experience.svg'}></img>
                            </a>
                        </div>
                        <a href="/story/5f96d442c8def3723ca3d2d7" >
                            <div className="feed-info-title"><b>Blood
                                Of Woods I</b>
                            </div>
                            <div className="feed-info-detail">แสงไฟสลัวในอพาร์ทเมนต์เก่าซอมซ่อย่านใจกลางเมืองกรุงเทพมหานคร
                                โอบล้อมไปด้วยควันบุหรี่จากชายหนุ่มที่พึ่งจบการศึกษาชั้นปริญญาตรีอย่างไร้จุดหมายได้ไม่กี่วัน
                                แม้เพื่อนๆ ที่...
                            </div>
                        </a>
                        <div className="w-clearfix feed-info-point">
                            <div className="text"><span>1 day ago</span><span>&nbsp;&nbsp;</span></div>
                            <span><span>|&nbsp;&nbsp;</span><div
                                className="text orange"><span>8</span><span>&nbsp;</span></div><div
                                className="text">recommended</div></span>
                        </div>
                    </div>
                    <div className="w-clearfix feed-profile hightlight">
                        <a className="" href="/OttoChain">
                            <div className="feed-profile-img highlight img-bg" style={{backgroundImage: "url(\"https://s3-ap-southeast-1.amazonaws.com/media.storylog/usercontent/5f267fdea834c3fc0123ab15/15963591366138532840.jpg\")"
                            }}></div>
                            <div className="feed-info-username highlight">OttoChain
                            </div>
                            <div className="feed-info-role highlight">Tutor, Musician</div>
                        </a>
                    </div>
                    </div>
            </div>
        </React.Fragment>
    );
}
export default StaffPickBorder;
// <div className="feed-card highlight bb th-font2"
//      style={{backgroundImage: "url(" + "https://s3-ap-southeast-1.amazonaws.com/media.storylog/storycontent/5f950c226e9410c804d16e6b/16036036780054305493.jpg" + ")"
//      }}>
//     <div className="feed-highlight-badge-box"></div>
//     <div className="w-clearfix feed-card inheightlight animated fadeIn">
//         <div className="feed-info nobg highlight">
//             <div className="w-clearfix feed-type">
//                 <div className="feed-badge-small staffpick">
//                     <img height="30px" src={process.env.PUBLIC_URL + 'img/tag.svg'}></img>
//                 </div>
//                 <a className="" href="/category/experience">
//                     <img height="30px" src={process.env.PUBLIC_URL + 'img/1Oz0bl1.svg'}></img></a></div>
//             <a href="/story/5f950c226e9410c804d16e6b">
//                 <div className="feed-info-title"><b>เด็กสมัยนี้ไม่อดทนเลย:
//                     การทดลองมาร์ชแมลโลว์</b>
//                 </div>
//                 <div className="feed-info-detail">1
//                     "เด็กสมัยนี้ไม่ได้เรื่อง" “เด็กสมัยนี้ไม่อดทนเลย" เป็นคำพูดที่ผมได้ยินบ่อยๆ จากผู้ใหญ่หลายคน
//                     ที่มักใช้ตัดสินและเหมารวมคนรุ่นใหม่ โดยบอกว่า เด็กรุ...
//                 </div>
//             </a>
//             <div className="w-clearfix feed-info-point">
//                 <div className="text"><span>9 hours ago</span><span>&nbsp;&nbsp;</span></div>
//                 <span><span>|&nbsp;&nbsp;</span><div
//                     className="text orange"><span>8</span><span>&nbsp;</span></div><div
//                     className="text">recommended</div></span></div>
//         </div>
//         <div className="w-clearfix feed-profile hightlight"><a
//             className="" href="/Porglon">
//             <div className="feed-profile-img highlight img-bg" style={{backgroundImage: "url(" + "https://s3-ap-southeast-1.amazonaws.com/media.storylog/usercontent/5f267fdea834c3fc0123ab15/15963591366138532840.jpg" + ")"
//             }}></div>
//             <div className="feed-info-username highlight">Porglon</div>
//             <div className="feed-info-role highlight">Editor &amp; Writer</div>
//         </a></div></div>
// </div>