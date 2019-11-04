import React from "react";
import "./Personal.css";

const Personal = props => {
  const { profileImg, username, userID, followers, description } = props;
  let image;

  profileImg === ""
    ? (image = "https://via.placeholder.com/160")
    : (image = profileImg);

  return (
    <React.Fragment>
      <div className="Personal-main-container">
        <div className="Personal-top-wrapper">
          <img className="Profile-img" src={image} />
          <div className="Identity">
            <div className="userName">{username}</div>
            <div className="userID">{userID}</div>
            <div className="followers">{followers}</div>
          </div>
        </div>
        <hr />
        <div className="Personal-bottom-wrapper">
          <p className="description">{description}</p>
        </div>
        <hr />
      </div>
    </React.Fragment>
  );
};

export default Personal;
