import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import downloadImg from "../../../assets/pic/pic/icon-download.png";

const DownloadBtn = ({ link, text }) => {
  const btnStyle = {
    color: "#357814",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 3,
  };
  return (
    <Link to={link}>
      <div style={btnStyle} className="box4">
        <img src={downloadImg} alt="" />

        <h5>{text}</h5>
      </div>
    </Link>
  );
};

DownloadBtn.propTypes = {
  linkFn: PropTypes.func,
  text: PropTypes.string,
};

export default DownloadBtn;
