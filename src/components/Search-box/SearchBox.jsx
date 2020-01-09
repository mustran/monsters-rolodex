import React from "react";
import styles from "./searchBox.module.css";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className={styles.search}
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
