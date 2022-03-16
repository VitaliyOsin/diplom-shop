import React from "react";
import PropTypes from "prop-types";
import "bootstrap-icons/font/bootstrap-icons.css";

const LogBtn = ({ linkFn, text, style }) => {
  const btnStyle = {
    ...style,
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 3,
    padingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    height: 37,
    border: "none",
    fontFamily: "inherit",
    fontSize: 18,
  };
  return (
    <>
      <button style={btnStyle} onClick={linkFn}>
        {text}
      </button>
    </>
  );
};

LogBtn.propTypes = {
  linkFn: PropTypes.func,
  text: PropTypes.string,
};

export default LogBtn;
