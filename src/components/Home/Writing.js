import React from "react";
import styled from "styled-components";
import "./writing.css";

var StyledWriting = styled.div`
  margin-top: 10px;
  width: 800px;
  height: 120px;
  border-radius: 5px;
  background-color: white;
  ${props =>
    props.block
      ? `
      z-index: 10000;
      position: fixed;
    `
      : ""}
`;

const Writing = props => {
  return (
    <StyledWriting block={props.state ? props.block : ""}>
      <div className="writing-top-wrapper">
        <input
          id="Post"
          onFocus={props.GetFocus}
          onBlur={props.OutFocus}
          placeholder="글 내용을 입력하세요"
        ></input>
      </div>
      <div className="writing-bottom-wrapper">
        <div className="add-photo">사진/동영상 추가</div>
        <div className="write-post">글 쓰기</div>
      </div>
    </StyledWriting>
  );
};

export default Writing;
