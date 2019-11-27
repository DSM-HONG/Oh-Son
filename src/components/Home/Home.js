import React, { useState } from "react";
import Post from "../Home/Post";
import Writing from "./Writing";
import Hashtag from "../Home/Hashtag";
import styled from "styled-components";

const ContainerBlock = styled.div`
  position: absolute;
  margin-top: 50px;
  height: 100%;
  left: 25%;
`;

const Block = styled.div`
  ${props =>
    props.block
      ? `
  position: fixed;
  left: 0;
  top: 2rem;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 1;
`
      : ""}
`;

var Posts = [
  {
    name: "ㅅㄷㅈ",
    time: "1시간 전"
  },
  {
    name: "ㅅㄴㅇ",
    time: "방금 전"
  },
  {
    name: "ㅂㅈㄷ",
    time: "하루 전"
  },
  {
    name: "ㅂㅈㄱㅁ",
    time: "1년 전"
  }
];

function Home() {
  var postList = Posts.map(({ name, time }) => (
    <Post name={name} time={time} />
  ));

  const [state, setState] = useState({ isFocused: false });

  const GetFocus = e => {
    setState({ isFocused: true });
  };
  const OutFocus = () => {
    setState({ isFocused: false });
  };

  return (
    <div>
      <ContainerBlock>
        <Writing
          GetFocus={GetFocus}
          OutFocus={OutFocus}
          state={state.isFocused}
          block={state.isFocused ? "block" : ""}
        />
        {state.isFocused ? <Block block={true} /> : ""}
        {postList}
      </ContainerBlock>
      <Hashtag />
    </div>
  );
}

export default Home;
