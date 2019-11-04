import React from 'react';
import './emailAuthentication.css';
import oh_son_logo from '../oh_son_logo.PNG';

const emailAuthentication = () => {
    return(
        <React.Fragment>
            <div className="main-container">
                <div className="main-wrapper">
                    <div className="left-wrapper">
                        <img id="logo" src={oh_son_logo}/>
                    </div>
                    <div className="right-wrapper">
                        <div className="login-background">
                            <span id="login">이메일 인증</span>
                            <div className="Input-Box">
                                <input placeholder="이메일 인증" className="Email-Box"/>
                                <span id="send-box">인증코드 보내기</span>
                                <input placeholder="인증코드" className="Code-Box"/>
                                <span id="authentication-box">인증하기</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default emailAuthentication;