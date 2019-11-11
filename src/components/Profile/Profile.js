import React from "react";
import "./Profile.css";
import Personal from "./Personal";
import RepresentativePhoto from "./RepresentativePhoto";

const tempData = {
  profileImg: "", //"https://loremflickr.com/240/240" https://via.placeholder.com/160,
  username: "손완서",
  userID: "@Wanseo",
  followers: "500M",
  description: "안녕하세요"
};

const Photos = [
  {
    postUrl: "",
    imgUrl: "https://loremflickr.com/240/240"
  },
  {
    postUrl: "",
    imgUrl: "https://loremflickr.com/240/240"
  },
  {
    postUrl: "",
    imgUrl: "https://loremflickr.com/240/240"
  },
  {
    postUrl: "",
    imgUrl: "https://loremflickr.com/240/240"
  },
  {
    postUrl: "",
    imgUrl: "https://loremflickr.com/240/240"
  }
];

const Profile = () => {
  const { profileImg, username, userID, followers, description } = tempData;

  let key = 1;
  var photoList = Photos.map(({ postUrl, imgUrl }) => (
    <RepresentativePhoto key={key++} postUrl={postUrl} imgUrl={imgUrl} />
  ));

  return (
    <React.Fragment>
      <div className="Profile-main-container">
        <div className="Profile-personal">
          <Personal
            profileImg={profileImg}
            username={username}
            userID={userID}
            followers={followers}
            description={description}
          />
        </div>
        <div className="Profile-photolist">{photoList}</div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
