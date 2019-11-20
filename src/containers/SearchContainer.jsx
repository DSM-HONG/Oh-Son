import React, { useState } from "react";
import Input from "../components/common/Input";
import styled from "styled-components";

const SearchStyle = styled(Input)`
  margin-left: 50px;
  padding-left: 10px;
  width: 300px;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
`;

const SearchContainer = () => {
  const [value, setValue] = useState("");

  const onChange = e => {
    setValue(e.target.value);
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      // 실행할 함수
      return;
    }
  };

  return (
    <SearchStyle
      onChange={onChange}
      placeholder="검색"
      value={value}
      onKeyDown={onKeyDown}
    />
  );
};
export default SearchContainer;
