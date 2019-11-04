import React from "react";
import "./Reply.css";

const Reply = props => {
  const { userImg, userName, comment } = props;

  return (
    <>
      <div className="Reply-main-container">
        <img className="Reply-userImg" src={userImg} />
        <div className="Reply-right-wrapper">
          <span className="Reply-userName">{userName}</span>
          <span className="Reply-comment">{comment}</span>
        </div>
      </div>
    </>
  );
};

export default Reply;
