import React, { useState } from "react";
import Reply from "./Reply";
import Input from "../common/Input";
import styled from "styled-components";
import "./Post.css";

const StyledInput = styled(Input)`
  margin: 0;
  font-size: 30px;
  color: #1d2129;
  width: 500px;
  height: 40px;
  border: none;
  &:focus {
    border-bottom: 1px solid black;
  }
  &::placeholder {
    font-weight: normal;
  }
`;

const comments = [
  {
    userImg: "https://loremflickr.com/240/240",
    userName: "Sonwanseo",
    comment: "Helloakse;fiasjfliasjfij"
  },
  {
    userImg: "https://loremflickr.com/240/240",
    userName: "qwersa",
    comment: "ajefqwehfqweifjqwiefjqw"
  },
  {
    userImg: "https://loremflickr.com/240/240",
    userName: "Squw6itdjfeo",
    comment: "Hehfjdfksgashsaefj"
  },
  {
    userImg: "https://loremflickr.com/240/240",
    userName: "Heasejf",
    comment: "Hejkgjmbnbxasjfij"
  }
];

const Post = ({ name, time }) => {
  const [isReply, setIsReply] = useState(false);
  const [setValue] = useState("");

  const handleReply = () => {
    setIsReply(!isReply);
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  // const { userImg, userName, comment } = comments;
  let key = 0;

  var commentList = comments.map(({ userImg, userName, comment }) => (
    <Reply
      key={key++}
      userImg={userImg}
      userName={userName}
      comment={comment}
    />
  ));

  return (
    <React.Fragment>
      <div className="Post-main-wrapper">
        <div className="Post-top-wrapper">
          <div className="Post-top-left-wrapper">
            <img
              className="profile-img"
              src="http://blog.jinbo.net/attach/615/200937431.jpg"
              alt=""
            />
            <p className="user-name">{name}</p>
            <p className="time">{time}</p>
          </div>
          <div className="Post-top-right-wrapper"></div>
        </div>
        <div className="Post-middle-wrapper">
          <img
            className="post-img"
            src="https://i0.wp.com/image.freepik.com/free-photo/set-bright-eggs-near-papers_23-2148050874.jpg"
            alt=""
          />
        </div>
        <div className="Post-bottom-wrapper">
          <div className="Post-bottom-contents">
            <img
              className="option-like"
              src="http://blog.jinbo.net/attach/615/200937431.jpg"
              alt=""
            />
            <img
              className="option-reply"
              src="http://blog.jinbo.net/attach/615/200937431.jpg"
              alt=""
            />
            <img
              className="option-share"
              src="http://blog.jinbo.net/attach/615/200937431.jpg"
              alt=""
            />
            <p className="post-contents">
              HONG에서 만들고 있는 프로젝트다. 만들 때마다 홍홍 웃음소리가
              나온다
            </p>
            <p className="hashtag">#HONG #손완서 # 잘생김</p>
            <hr />
            <div className="Post-bottom-left-wrapper">
              <StyledInput
                className="reply"
                onChange={onChange}
                placeholder="댓글 달기..."
              />
              {/* <input className="reply" placeholder="댓글 달기..." /> */}
            </div>
            <div className="Post-bottom-right-wrapper">
              <a className="showReply" onClick={handleReply} href={null}>
                댓글 보기
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Reply-wrapper" style={{ background: "white" }}>
        {isReply && commentList}
      </div>
    </React.Fragment>
  );
};

export default Post;
