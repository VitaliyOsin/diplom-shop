import React from "react";
// import logo from "../../../assets/pic/pic/top1.png";
import { Link } from "react-router-dom";
import CustomProfile from "../ui/customProfile/CustomProfile";

const Header = () => {
  return (
    <div className="top-header">
      <div className="logo-n-slogo">
        <Link to="/">Интернет магазин проектов</Link>
        <p>Готовые проекты и чертежи корпусной мебели.</p>
      </div>
      <div className="top-contact">
        <CustomProfile />
      </div>
    </div>
  );
};

export default Header;
