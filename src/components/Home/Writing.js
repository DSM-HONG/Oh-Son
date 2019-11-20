import React from "react";
import styled from "styled-components";
import "./Writing.css";

var StyledWriting = styled.div`
  margin-top: 10px;
  width: 800px;
  height: 130px;
  border-radius: 5px;
  background-color: white;
  ${props =>
    props.block
      ? `
      z-index: 10;
      position: absolute;
      height: 500px;
    `
      : ""}
`;

const Writing = props => {
  return (
    <StyledWriting block={props.state ? props.block : ""}>
      <div className="writing-top-wrapper">
        <div
          className="Post"
          contentEditable="true"
          onFocus={props.GetFocus}
          onBlur={props.OutFocus}
        ></div>
      </div>
      <div className="writing-bottom-wrapper">
        <div className="add-photo">사진/동영상 추가</div>
      </div>
    </StyledWriting>
  );
};

export default Writing;
