import React from "react";

function ReadListBorder() {
    return (
        <div className="feed-card highlight book animated fadeIn style-img th-font2" style={{backgroundImage: "url(" + "https://s3-ap-southeast-1.amazonaws.com/media.storylog/readlistcontent/57aaf11ef3ec36b3c2558ca1/cover.jpg" + ")"
        }}>
            <img className="img-feed-highlight book book-feed"
                 src="https://s3-ap-southeast-1.amazonaws.com/media.storylog/readlistcontent/57aaf11ef3ec36b3c2558ca1/cover.jpg"
                 width="100%"></img>
            <div className="book-bg">
                <div className="w-clearfix feed-card inheightlight book">
                    <div className="w-clearfix feed-info-rl nobg highlight full book">
                        <div className="w-clearfix feed-type book"></div>
                        <div className="profile-user-image_user book readList">
                            <img className="" src={process.env.PUBLIC_URL + 'img/ReadlistBorder.svg'} alt="test">
                            </img>
                        </div>
                        <div className="feed-info-title collection">อ่านรอโปเกม่อนเกิด
                        </div>
                        <div className="feed-info-detail book read-list">วินาทีนี้คงมีน้อยคนนักที่ไม่รู้จักเกมสุดดังอย่าง
                            pokemon go ตัวการ์ตูนที่ใครหลายคนเติบโตมากับมัน
                            ปรากฏการณ์โปเกม่อนฟีเวอร์นี้อาจมีมุมมองอะไรแปลกใหม่น่าสนใจขนาดไหนเมื่อมองผ่านสายตาของนักเขียนใน
                            storylog กันนะ พักจากการจับโปเกมม่อนเมื่อไร ลองให้ 10 เรื่องราวเกียวกับโปเกม่อนใน Readlist
                            นี้ของเราช่วยให้อินมากกว่าเดิมกันนะ :D
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default ReadListBorder;