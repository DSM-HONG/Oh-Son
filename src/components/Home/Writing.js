import React from "react";
import styled from "styled-components";
import "./Writing.css";

var StyledWriting = styled.div`
  ${props =>
    props.state
      ? `
      margin-top: 10px;
      width: 800px;
      border-radius: 5px;
      background-color: white;
      z-index: 10;
      position: absolute;
      height: 500px;
      overflow-y: scroll;
    `
      : `
    margin-top: 10px;
    width: 800px;
    height: 130px;
    border-radius: 5px;
    background-color: white;
  `}
`;

var StyledDiv = styled.div`
  ${props =>
    props.state
      ? `
  margin-bottom: 5px;
  width: 770px;
  font-weight: normal;
  font-family: initial;
  font-size: 20px;
  padding-left: 20px;`
      : `
  margin-bottom: 5px;
  width: 770px;
  height: 75px;
  font-size: 20px;
  padding-left: 20px;
  max-height: 500px;
  `}
`;

const Writing = props => {
  return (
    <StyledWriting {...props}>
      <div className="writing-top-wrapper">
        <StyledDiv
          id="Post"
          className="Post"
          contentEditable="true"
          onFocus={props.GetFocus}
          onBlur={props.OutFocus}
        />
      </div>
      <div className="writing-bottom-wrapper">
        <div className="add-photo">사진/동영상 추가</div>
      </div>
    </StyledWriting>
  );
};

export default Writing;
