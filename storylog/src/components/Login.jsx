import React from "react";

function Login() {
    return (
        <div className="Login">
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Login
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="card-popup login">
                            <div className="popup-title th-font2" id="exampleModalLabel"><h4 className="p-2"><b>LOGIN TO
                                STORYLOG</b></h4></div>
                        </div>
                        <div className="register-form center">
                            <button className="facebook-login-button mb-3">
                                <img className="facebook-login-button-icon" width="24" height="24"
                                     src={process.env.PUBLIC_URL + 'img/facebook.png'} alt="test">
                                </img><span className="th-font2"> Login with Facebook</span>
                            </button>
                            <div className="text th-font2">เราใช้การล็อคอินผ่าน
                                Facebook เพราะเราให้ความสำคัญกับตัวตนของนักเขียน
                                อย่างไรก็ตามคุณสามารถแก้ไขเปลี่ยนชื่อและรูปภาพได้ภายหลังจากการสมัครทันที
                            </div>
                            <div className="tabs">
                                <div className="tabs-text login th-font2">OR</div>
                                <div className="tabs-line login"></div>
                            </div>
                            <div className="w-form">
                                <input className="w-input input th-font2 mb-4" id="input_username_login" type="text"
                                       placeholder="Penname (Username)"></input>
                                <input className="w-input input th-font2" id="input_password_login" type="password"
                                       placeholder="Password"></input>
                            </div>
                        </div>
                        <div className="popup-footer">
                            <button className="button" data-dismiss="modal">Cancel</button>
                            <button className="button green">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;