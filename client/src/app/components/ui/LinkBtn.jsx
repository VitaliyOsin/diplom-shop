import React from "react";
import PropTypes from "prop-types";
import "bootstrap-icons/font/bootstrap-icons.css";

const LinkBtn = ({ linkFn, text }) => {
  const btnStyle = {
    color: "#357814",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 3,
  };
  return (
    <div role="button" style={btnStyle} onClick={linkFn} className="box4">
      <div className="nb">
        <div className="back">
          <i style={{ marginRight: 15 }} className="bi bi-backspace me-3"></i>{" "}
          {text}
        </div>
      </div>
    </div>
  );
};

LinkBtn.propTypes = {
  linkFn: PropTypes.func,
  text: PropTypes.string,
};

export default LinkBtn;
