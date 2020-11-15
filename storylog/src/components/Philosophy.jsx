import React from "react";
import Navigation from "./Navigation";

class Philosophy extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="home th-font2">
                <Navigation philo="true"/>
                <div class="philosophy-cover">
                    <div class="philosophy-logo"></div>
                </div>
                <div class="w-container feed">
                    <div class="w-clearfix feed-card terms">
                        <div class="feed-collection terms center">
                            <div class="feed-info-title collection terms"><b>ทุกคนมีเรื่องเล่า!</b></div>
                            <div class="feed-info-detail term-content">
                                ไม่ว่าคุณจะเป็นใคร วัยไหน ทำงานอะไร จะเป็น นักเรียน พนักงานออฟฟิศ นักบิน นางแบบ …
                                เราเชื่อว่าทุกๆ ชีวิตย่อมมีเรื่องราวที่อยากบอกต่อเสมอ Storylog จึงถือกำเนิดขึ้น
                                เพื่อเป็นพื้นที่รวบรวม เรื่องราวของทุกคน ไม่ว่าจะเป็น ประสบการณ์ชีวิต ความรู้
                                และก้อนความคิดที่อยากจะส่งต่อ เพื่อเป็นแรงบันดาลใจ
                                หรืออย่างน้อยก็ช่วยสร้างรอยยิ้มที่เปลี่ยนวันเศร้าๆ ให้กลายเป็นวันที่สดใสให้หลายๆ คนได้
                            </div>
                            <hr></hr>
                            <div class="feed-info-title collection terms"><b>เรื่องราวดีๆ ไม่ควรมีวันหมดอายุ</b></div>
                            <div class="feed-info-detail term-content">Storylog
                                อยากจะเป็นอีกช่องทางให้ทุกคนได้ส่งต่อและเก็บเรื่องราวไว้ ไม่ให้ตายไปตามกาลเวลา นอกจากจะ
                                ค้นหาเรื่องได้จากระบบ Full-text search และ Hashtag แล้ว เรายังพยายามดึง เรื่องราวๆ ดีๆ
                                กลับขึ้นมาให้คนได้อ่าน อยู่เสมอ&nbsp; ดังนั้นเราจึงไม่ปิดกั้น
                                ถ้าคุณจะนำบันทึกหรือไดอารี่ที่เคยจดไว้ จาก Blog ที่เคยเขียน หรือแม้แต่&nbsp; สเตตัส
                                Facebookเก่าๆ ที่เคยโพสต์ไว้ ถ้าไม่อยากให้ตกหายไปใน feed&nbsp; สามารถนำมาเก็บไว้ที่นี่
                            </div>
                            <hr></hr>
                            <div class="feed-info-title collection terms"><b>ไม่ต้องเป็น “นักเขียน” ก็
                                “เขียน”&nbsp;&nbsp;ได้</b></div>
                            <div class="feed-info-detail term-content">เราสร้างที่นี่เพื่อให้ทุกคนได้มาเล่าเรื่อง
                                เก็บเรื่องราว เรื่องที่อยากบอก เรื่องที่อยากระบาย เรื่องที่อยากบันทึก
                                ไม่ต้องไปสนว่าต้องมีคนอ่านมากมาย มันคือพื้นที่ของเรา…
                                เป็นหนังสือที่ทำให้เรายิ้มออกได้เสมอ เมื่อพลิกมันกลับมาอ่าน ถ้ามันจะมีซักบทในหนังสือ
                                ที่มันจะเข้าถึงหลายๆ คนได้ คนชอบเยอะ อ่านเยอะ แชร์เยอะ ก็ถือว่าเป็นโบนัส
                            </div>
                            <hr></hr>
                            <div class="feed-info-title collection terms"><b>เล่าเรื่องอะไรได้บ้าง?</b></div>
                            <div class="feed-info-detail term-content">คุณสามารถเล่าเรื่องได้อิสระ
                                จะเป็นประสบการณ์ที่ได้เจอมา เรื่องตลกเปิ่นๆ โมเม้นรักกุ๊กกิ๊ก เหตุการณ์จุดเปลี่ยนชีวิต
                                หรือไม่ว่าจะเป็นทัศนคติ ความคิดเห็นต่อสิ่งที่ได้ไปเจอมา
                                อย่างไรก็ตามพวกเราสนับสนุนให้ใช้เรื่องราว ในการ “สร้างสรรค์” เปิดมุมมองใหม่ แชร์ความสนุก
                                ความตื่นเต้น เสียงหัวเราะ ไม่ใช่เพื่อว่าร้ายโจมตีบุคคลที่สามในด้านลบ
                            </div>
                            <hr></hr>
                            <div class="feed-info-title collection terms"><b>สนับสนุนเส้นทางนักเขียนอาชีพ</b></div>
                            <div class="feed-info-detail term-content">เราขับเคลื่อนไปทีละก้าว
                                เริ่มแรกเราแค่อยากให้ทุกคนได้เล่าได้เขียนได้อย่างไม่มีกำแพง
                                ก้าวต่อไปเราจะสนับสนุนผู้ที่อยากเป็น “นักเขียน” ให้ได้ออกผลงานสู่ตลาดได้ง่ายขึ้น
                                จะทั้งการรวมเล่ม การทำ E-book และแคมเปญต่างๆ ที่เรากำลังผลักดัน&nbsp; เราหวังว่าในไม่ช้า
                                Storylog จะเป็นพื้นที่อีกแห่งที่จะผลักดัน Community
                                นักเขียนให้แข็งแกร่ง&nbsp; สร้างช่องทาง, สร้างรายได้ และ
                                สร้างอาชีพให้กับนักเขียนได้จริงๆ
                            </div>
                        </div>
                    </div>
                    <div class="tabs">
                        <a class=" active" href="#/philosophy">
                            <div class="tabs-text first-no-border green">PHILOSOPHY</div>
                        </a>
                        <a class="" href="#/UserAgreement">
                            <div class="tabs-text">USER AGREEMENT</div>
                        </a>
                        <a class="" href="#/CreativeCommons">
                            <div class="tabs-text">CC LICENSE</div>
                        </a>
                        <div class="tabs-line"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Philosophy;