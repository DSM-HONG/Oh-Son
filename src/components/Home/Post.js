import React, { useState, useRef } from "react";
import Reply from "./Replylist";
import styled from "styled-components";
import LikeLogo from "./LikeLogo";
import ReplyLogo from "./ReplyLogo";
import ShareLogo from "./ShareLogo";
import "./Post.css";

const StyledInput = styled.input`
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
    id: 1,
    userImg: "https://loremflickr.com/240/240",
    userName: "Sonwanseo",
    comment: "Helloakse;fiasjfliasjfij"
  },
  {
    id: 2,
    userImg: "https://loremflickr.com/240/240",
    userName: "qwersa",
    comment: "ajefqwehfqweifjqwiefjqw"
  },
  {
    id: 3,
    userImg: "https://loremflickr.com/240/240",
    userName: "Squw6itdjfeo",
    comment: "Hehfjdfksgashsaefj"
  },
  {
    id: 4,
    userImg: "https://loremflickr.com/240/240",
    userName: "Heasejf",
    comment: "Hejkgjmbnbxasjfij"
  }
];

const Post = ({ name, time }) => {
  const [isReply, setIsReply] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [inputValue, setValue] = useState("");
  const [nextComments, setNextComments] = useState(comments);
  const replyRef = useRef(null);

  const handleReply = () => {
    setIsReply(!isReply);
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  const onReplyClick = () => {
    replyRef.current.focus();
  };

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
            <LikeLogo isLiked={isLiked} onClick={handleLikeToggle} />
            <ReplyLogo onClick={onReplyClick} />
            <ShareLogo />
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
                ref={replyRef}
              />
              {/* <input className="reply" placeholder="댓글 달기..." /> */}
            </div>
            <div className="Post-bottom-right-wrapper">
              <a className="showReply" onClick={handleReply}>
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
