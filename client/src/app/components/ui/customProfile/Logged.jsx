import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUserData } from "../../../store/users";

const Logged = () => {
  const currentUser = useSelector(getCurrentUserData());
  console.log(currentUser);
  return (
    <>
      <ul>
        <li>
          <Link to="/rulepanel/users">{currentUser?.name}</Link>
          <Link to="/rulepanel/edit">/(Edit)</Link>
        </li>
        <li>
          <Link to="/rulepanel">Панель управления</Link>
        </li>
      </ul>
    </>
  );
};

export default Logged;
