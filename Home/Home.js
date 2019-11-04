import React from "react";
import Post from "../Home/Post";
import Writing from "./Writing";
import Hashtag from "../Home/Hashtag";

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

  return (
    <div>
      <div className="Post-main-container">
        <Writing />
        {postList}
      </div>
    </div>
  );
}

export default Home;
