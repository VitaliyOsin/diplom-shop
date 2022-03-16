import React from "react";
import { Link } from "react-router-dom";

const Unlogged = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/login">Войти</Link>
        </li>
        <li>
          <Link to="/signup">Регистрация</Link>
        </li>
      </ul>
    </>
  );
};

export default Unlogged;
