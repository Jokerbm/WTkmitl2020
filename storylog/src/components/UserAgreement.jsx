import React from "react";
import Navigation from "./Navigation";

class UserAgreement extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="home th-font2">
                <Navigation/>
                <div class="w-container feed" style={{marginTop: 100 + 'px'}}>
                    <div class="tabs">
                        <a class="" href="#/philosophy">
                            <div class="cc tabs-text first-no-border">PHILOSOPHY</div>
                        </a>
                        <a class=" active" href="#/UserAgreement">
                            <div class="cc tabs-text green">USER AGREEMENT</div>
                        </a>
                        <a class="" href="#/CreativeCommons">
                            <div class="cc tabs-text">CC LICENSE</div>
                        </a>
                        <div class="tabs-line"></div>
                    </div>
                    <div class="w-clearfix feed-card terms">
                        <div class="feed-collection terms">
                            <div class="terms-title"><b>User Agreement</b></div>
                            <div class="feed-info-detail">
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;การเข้าใช้ Storylog มีค่าเท่ากับ คุณยอมรับ ‘เงื่อนไขและข้อตกลงในการใช้บริการ’ ทุกข้อกับเรา</span>
                                <br></br>
                                <ol>
                                    <li>เนื้อหา เรื่องราว ทั้งหมดที่คุณลงใน Storylog ถือเป็นกรรมสิทธิ์ของคุณ
                                        อย่างไรก็ตามเราสามารถนำเนื้อหามาเผยแพร่ผ่าน Storylog และโซเชียล มีเดียอื่นๆ
                                        เพื่อให้ทุกคนสามารถเข้าถึงเนื้อหาของคุณได้มากขึ้น
                                        โดยคุณมีสิทธิ์แก้ไขและลบเรื่องราวของคุณเองได้ตามใจชอบ
                                    </li>
                                    <li>เรื่องราวที่ลงใน Storylog ต้องไม่ใช่เรื่องก๊อปปี้ คัดลอก
                                        หรือแอบอ้างผลงานของผู้อื่นมาเป็นของตัวเอง
                                        ทางเรายังได้จัดทำระบบลิขสิทธิ์ขึ้นมาใหม่เพื่อป้องกันผลงานของคุณให้ดีที่สุดเท่าที่ทำได้
                                    </li>
                                    <li>ทีมงาน Storylog มีสิทธิ์ลบเรื่องราวที่ผิดกฎหมายหรือศีลธรรม
                                        รวมถึงเรื่องราวที่ยุยงให้เกิดความแตกแยก
                                        โดยสามารถทำได้ทันทีโดยไม่แจ้งก่อนล่วงหน้า
                                    </li>
                                    <li>การล็อคอินผ่าน Facebook เป็นการยืนยันว่าคุณมีตัวตนอยู่จริง
                                        อย่างไรก็ตามคุณสามารถเปลี่ยนชื่อและรูปได้ทันทีหลังลงทะเบียนเสร็จสิ้นเรียบร้อยแล้ว
                                        โดย Storylog จะไม่โพสต์ข้อความใดๆลงบนโปรไฟล์หากไม่ได้รับอนุญาต
                                    </li>
                                    <li>อีเมลที่คุณใช้ในการลงทะเบียนจะถูกเก็บเป็นความลับ เราอาจส่งข้อมูล เช่น
                                        อีเมลต้อนรับ การแจ้งเตือนว่าเรื่องราวของคุณได้รับเลือก
                                        หรือจดหมายข่าวประจำสัปดาห์ ไปยังอีเมลของคุณ เราจะไม่เผยแพร่ข้อมูลของคุณ
                                        ยกเว้นแต่บริษัท หรือบุคคลที่สามที่ร่วมงาน ที่ให้คำสัญญาว่าจะไม่เปิดเผยข้อมูลต่อ
                                    </li>
                                    <li>หลีกเลี่ยงรูปภาพที่ติดลิขสิทธิ์ลงในภาพประกอบ Storylog รูปที่นำมาใช้
                                        เจ้าของเรื่องสามารถกรอกเครดิตได้ภายในหน้า ‘สร้างเรื่อง’
                                    </li>
                                    <li>ไม่ลงรูปภาพที่ไม่เหมาะสมและขัดกับศีลธรรมอันดีงาม เช่น ภาพอนาจารของเด็ก
                                        หรือภาพที่ชักจูงให้เกิดความขัดแย้งระหว่างคนหมู่มาก
                                    </li>
                                    <li>ทางทีมงาน Storylog จะไม่รับผิดชอบใดๆทั้งสิ้น
                                        ในกรณีที่ผู้ใช้โพสต์เรื่องราวหรือภาพประกอบที่ผิดกฎหมาย ผิดลิขสิทธิ์
                                        หรือมีการฟ้องร้องเกินขึ้น
                                    </li>
                                    <li><span>และท้ายที่สุด … เพราะ Storylog คือพื้นที่สำหรับการแบ่งปันทุกเรื่องราว ไม่ว่าจะเป็นประสบการณ์ชีวิต แนวคิด หรือเรื่องตลกโปกฮา ต่างคนก็ต่างมีเรื่องราวที่ไม่เหมือนกัน เราสนับสนุนการเขียนในเชิงสร้างสรรค์ รวมถึงการเคารพสิทธิของผู้ใช้คนอื่นๆ ดังนั้น Storylog จึงขอความร่วมมือ …</span>
                                        <ul>
                                            <li>เคารพความคิดเห็นและเรื่องราวของผู้ใช้คนอื่น</li>
                                            <li>ไม่ข่มขู่ ก่อกวน หรือใช้ภาษารุนแรง
                                                และไม่ใช้ถ้อยคำที่หยาบคายต่อผู้อื่นทั้งในคอมเมนต์และ direct message
                                            </li>
                                            <li>ไม่นำรูปหรือข้อมูลส่วนตัวของผู้ใช้คนอื่นมาโพสต์ได้ไม่ขออนุญาต</li>
                                            <li>ทางเรามีสิทธิ์แบนหรือลบ account
                                                ของผู้ที่ไม่ปฏิบัติตามโดยไม่ต้องแจ้งให้ทราบล่วงหน้า
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                                <br></br><span> เราหวังว่าคุณจะมีประสบการณ์ที่ดีกับ Storylog และได้แรงบันดาลใจจากเรื่องราวที่ทุกคนร่วมแบ่งปันบนพื้นที่ของเรา&nbsp;</span>
                            </div>

                        </div>

                    </div>
                    <div class="tabs">
                        <a class="" href="#/philosophy">
                            <div class="cc tabs-text first-no-border">PHILOSOPHY</div>
                        </a>
                        <a class=" active" href="#/UserAgreement">
                            <div class="cc tabs-text  green">USER AGREEMENT</div>
                        </a>
                        <a class="" href="#/CreativeCommons">
                            <div class="cc tabs-text">CC LICENSE</div>
                        </a>
                        <div class="tabs-line"></div>
                    </div>
                </div>
            </div>

        );

    }
}
export default UserAgreement;


