import React from "react";
import "./RepresentativePhoto.css";

const RepresentativePhoto = ({ postUrl, imgUrl }) => {
  return (
    <>
      <div className="Rep-main-container">
        <img src={imgUrl} alt=""/>
      </div>
    </>
  );
};

export default RepresentativePhoto;
