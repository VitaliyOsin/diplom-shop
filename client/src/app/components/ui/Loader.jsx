import React from "react";
import loaderImg from "../../../assets/pic/pic/loader.gif";

const Loader = () => {
  const style = {
    loader: {
      position: "fixed",
      left: 0,
      top: 0,
      width: "100vw",
      height: "100vh",
      background: "#fff",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  };
  return (
    <div style={style.loader}>
      <img src={loaderImg} alt="" />
    </div>
  );
};

export default Loader;
