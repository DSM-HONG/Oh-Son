import React from "react";
import "./Replylist.css";

const Reply = props => {
  const { userImg, userName, comment } = props;

  return (
    <>
      <div className="Reply-main-container">
        <img className="Reply-userImg" src={userImg} alt="" />
        <div className="Reply-right-wrapper">
          <span className="Reply-userName">{userName}</span>
          <span className="Reply-comment">{comment}</span>
        </div>
      </div>
    </>
  );
};

export default Reply;
