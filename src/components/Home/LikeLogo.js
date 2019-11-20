import React from "react";

const LikeLogo = ({ isLiked, onClick }) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="55"
      viewBox="0 0 38 55"
      style={{ userSelect: "none", marginRight: "20px" }}
    >
      <text
        id="oh"
        transform="translate(0 39)"
        fill={isLiked ? "red" : "#767676"}
        font-size="34"
        font-family="MVBoli, MV Boli"
        cursor="grab"
      >
        <tspan x="0" y="0">
          oh
        </tspan>
      </text>
    </svg>
  );
};

export default LikeLogo;
