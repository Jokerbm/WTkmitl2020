import React from "react";
import Navigation from "./Navigation";

class CreativeCommons extends React.Component {
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
                            <div class="tabs-text first-no-border">PHILOSOPHY</div>
                        </a>
                        <a class=" active" href="#/UserAgreement">
                            <div class="tabs-text">USER AGREEMENT</div>
                        </a>
                        <a class="" href="#/CreativeCommons">
                            <div class="tabs-text green">CC LICENSE</div>
                        </a>
                        <div class="tabs-line"></div>
                    </div>
                    <div class="w-clearfix feed-card terms">
                        <div class="feed-collection terms">
                            <div class="terms-title"><b>Creative Commons License</b></div>
                            <div class="feed-info-detail">
                                <span>1. &nbsp; Creative Commons คืออะไร?</span><br></br>
                                <span>ในยุคของการแชร์เรื่องราว ข่าวสาร รวมไปถึงรูปภาพ และมีเดียในรูปแบบต่างๆ Creative Commons จึงถือกำเนิดขึ้นเพื่อให้เจ้าของลิขสิทธิ์ผลงานสามารถให้สิทธิบางส่วนหรือทั้งหมดแก่สาธารณะ โดยยังคงสงวนสิทธิอื่นๆของตนเองไว้ได้</span><br></br>
                                <br></br><span> 2. &nbsp; Creative Commons ต่างจาก Copyrights อย่างไร?</span><br></br><span>Copyrights หรือ ลิขสิทธิ์ คือสิทธิของผู้สร้างสรรค์ผลงานแต่เพียงผู้เดียว ดังนั้นหากคุณต้องการใช้ผลงานชิ้นนี้ คุณต้องติดต่อขออนุญาตไปยังเจ้าของผลงานโดยตรง ซึ่งเจ้าของผลงานจะให้ลิขสิทธิ์ทั้งหมดหรือบางส่วน จะให้ฟรีหรือคิดเงินก็ได้</span>
                                <br></br><br></br><span> ในทางกลับกัน สำหรับ Creative Commons เจ้าของผลงานจะแจ้งสิทธิผ่านชุดเงื่อนไขและมีผลคุ้มครองทางกฎหมาย ส่วนผู้ใช้สามารถนำไปใช้ได้ทันทีตามเงื่อนไขที่ระบุเอาไว้ โดยไม่ต้องขออนุญาต</span>
                                <br></br><br></br><span> 3. &nbsp; Creative Commons มีแบบไหนบ้าง?</span><br></br>
                                <span>ชุดเงื่อนไขของ Creative Commons แบ่งออกเป็น 4 แบบหลักๆ คือ</span><br></br>
                                <span>•&nbsp;&nbsp;Attribution (BY) คนนำงานไปใช้ได้ แต่ต้องอ้างอิงที่มา</span><br></br>
                                <span>•&nbsp;&nbsp;Non-Commercial (NC) คนนำงานไปใช้ได้ แต่ห้ามนำไปใช้เพื่อการค้า</span><br></br>
                                <span>•&nbsp;&nbsp;No Derivatives (ND) คนนำงานไปใช้ได้ แต่ห้ามเปลี่ยนแปลงโดยเด็ดขาด</span><br></br>
                                <span>•&nbsp;&nbsp;Share Alike (SA) คนที่นำงานไปใช้ได้ แต่งานที่ใช้ต้องมี Creative Commons ที่เหมือนกัน เช่น งานดั้งเดิมเป็น Non-Commercial งานที่เอาไปใช้ก็ต้องเป็น Non-Commercial เช่นเดียวกัน</span>
                                <br></br><br></br>
                                <span> 4. &nbsp; Creative Commons ใช้งานได้อย่างไร?</span><br></br>
                                <span>สัญญาอนุญาตของ Creative Commons นั้น จะขึ้นอยู่กับการเลือกชุดเงื่อนไข โดยเจ้าของผลงานสามารถเลือกได้มากกว่า 1 เงื่อนไข และแบ่งออกเป็นสัญญาอนุญาตหลักๆ ได้เป็น 6 แบบดังนี้</span>
                            </div>
                            <img class="img-terms destop" alt={"table"} src={process.env.PUBLIC_URL + 'img/table.svg'}
                                 width="100%"></img>
                            <img class="img-terms mobile" alt={"table2"} src={process.env.PUBLIC_URL + 'img/table2.svg'}
                                 width="100%"></img>
                            <div class="feed-info-detail"><span>ดังนั้น...</span><br></br>
                                <span>• &nbsp;งานทุกชิ้นสามารถนำไปใช้ได้ทันที โดยคุณต้องให้เครดิตเจ้าของผลงานเสมอ</span><br></br>
                                <span>• &nbsp;งานที่มีชุดเงื่อนไข NC หรือ Non-Commercial นั้น คุณไม่สามารถนำไปใช้เพื่อการค้าได้</span><br></br>
                                <span>• &nbsp;คุณห้ามดัดแปลงงานที่มีชุดเงื่อนไข ND หรือ Non-Derivatives เด็ดขาด</span><br></br>
                                <span>• &nbsp;งานที่มีชุดเงื่อนไข SA จะมีเงื่อนไขเหมือนเดิมเสมอ ไม่ว่างานจะผ่านการเผยแพร่กี่ครั้งก็ตาม ถ้าชุดเงื่อนไขเป็น CC-BY-NC-SA งานชิ้นที่เผยแพร่ต่อๆ ไปก็ต้องเป็นงาน CC-BY-NC-SA เสมอ เพื่อป้องกันไม่ให้คนที่นำงานไปเผยแพร่เป็นคนที่ 3 หรือ 4 ลดทอนเงื่อนไขให้น้อยลง เช่น ยกเลิกชุดเงื่อนไข NC แล้วนำงานไปใช้ในการค้าขายได้</span>
                            </div>
                            <div class="feed-collection terms center" style={{paddingBottom: 0 + 'px'}}>
                                <a href="http://creativecommons.org/licenses/">
                                    <img class="text" alt={"cc"} src={process.env.PUBLIC_URL + 'img/cc.jpg'}
                                         width="200px"></img>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div class="tabs">
                        <a class="" href="#/philosophy">
                            <div class="tabs-text first-no-border">PHILOSOPHY</div>
                        </a>
                        <a class="" href="#/UserAgreement">
                            <div class="tabs-text">USER AGREEMENT</div>
                        </a>
                        <a class=" active" href="#/CreativeCommons">
                            <div class="tabs-text green">CC LICENSE</div>
                        </a>
                        <div class="tabs-line"></div>
                    </div>
                </div>
            </div>

        );
    }
}

export default CreativeCommons;