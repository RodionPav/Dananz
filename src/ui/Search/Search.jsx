/* eslint-disable react/prop-types */
import React from "react";

import "./Search.scss";
import clearIcon from "/img/utils/clear.svg";

function Search({searchValue, setSearchValue, catalog}) {
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  // const updateSearchValue = React.useCallback(
  //     setSearchValue()
  // );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    setSearchValue(event.target.value);
    console.log(setValue(event.target.value))
    // updateSearchValue(event.target.value);
  };

  return (
    <div className="search">
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className="search__input"
        placeholder="Search ..."
      />
      {searchValue && (
        <img
          onClick={onClickClear}
          className="search__input-img"
          src={clearIcon}
          alt="clearIcon"
        />
      )}
    </div>
  );
}

export default Search;
