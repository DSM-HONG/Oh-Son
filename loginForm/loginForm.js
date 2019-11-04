import React from "react";
import { Link } from "react-router-dom";
import "./loginForm.css";
import oh_son_logo from "../oh_son_logo.PNG";
import Email from "../Register/emailAuthentication";

const Login = ({ id, pw, handleIdChange, handlePwChange, ONCLICK }) => {
  const state = {
    checked: false
  };
  return (
    <React.Fragment>
      <div className="main-container">
        <div className="main-wrapper">
          <div className="left-wrapper">
            <img id="logo" src={oh_son_logo} />
          </div>

          <div className="right-wrapper">
            <div className="login-background">
              <span id="login">로그인</span>
              <div className="Input-Box">
                <input
                  placeholder="아이디 or 이메일"
                  className="ID-Box"
                  onChange={handleIdChange}
                  value={id}
                />
                <input
                  placeholder="비밀번호"
                  type="password"
                  className="PW-Box"
                  onChange={handlePwChange}
                  value={pw}
                />
              </div>
              <div className="Button-Link">
                <div className="top-wrapper">
                  <div className="left-container">
                    <label htmlFor="checkbox">
                      <div id="fakeCheckbox">{state.checked ? "V" : ""}</div>
                    </label>
                    <input
                      id="checkbox"
                      type="checkbox"
                      onClick={e => {
                        state.checked = e.target.checked;
                        document.getElementById(
                          "fakeCheckbox"
                        ).innerText = state.checked ? "✔" : "";
                      }}
                    />
                    <span id="checkbox-ment">ID 기억하기</span>
                  </div>
                  <span onClick={ONCLICK} id="login-box">
                    로그인
                  </span>
                </div>
                <div className="bottom-wrapper">
                  <div>
                    <a id="find_IDPW">
                      <Link to="">아이디/비밀번호 찾기</Link>
                    </a>
                  </div>
                  <div>
                    <a id="register">
                      <Link to="/email">회원가입</Link>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
