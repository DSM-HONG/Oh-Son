import React from "react";
import oh_son_logo from "../oh_son_logo.PNG";
import "./FindPW.css";

const FindPW = () => {
  return (
    <>
      <div clasName="FindPW-main-container">
        <div className="FindPW-left-wrapper">
          <img className="logo" src={oh_son_logo} alt="" />
        </div>

        <div className="FindPW-right-wrapper">
          <div className="FindPW-Find">
            <span className="FindPW-ment">비밀번호 찾기</span>
            <div className="FindPW-inputBox">
              <input placeholder="이름 입력" className="FindPW-inputName" />
              <input placeholder="이메일 입력" className="FindPW-inputEmail" />
            </div>
            <span className="FindPW-findBox">비밀번호 찾기</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindPW;
