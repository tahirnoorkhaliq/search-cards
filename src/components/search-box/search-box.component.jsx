import { Component } from "react";
import "./search-box.styles.css";

const SearchBox = (props) => {
  const { className, placeholder, onChangeEventHandler } = props;
  return (
    <div>
      <input
        type="search"
        className={className}
        placeholder={placeholder}
        onChange={onChangeEventHandler}
      />
    </div>
  );
};

export default SearchBox;
