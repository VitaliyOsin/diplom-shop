import React from "react";
import { Link } from "react-router-dom";
import { useMPage } from "../../hooks/useMPage";

const RightBar = () => {
  const { mpage } = useMPage();
  return (
    <div id="rside">
      <ul className="rist">
        <li>
          <h2>Меню:</h2>
        </li>
      </ul>
      <ul className="rist">
        {mpage.map((mp) => (
          <li key={mp._id}>
            <Link to={`/mpage/${mp.link}`}>{mp.title}</Link>
          </li>
        ))}
      </ul>
      <ul className="rist">
        <li>
          <h2>Услуги:</h2>
        </li>
      </ul>
      <ul className="rist">
        <li>
          <Link to="/article/zakaz">Заказать проект</Link>
        </li>
        <li>
          <Link to="/article/raskroy">Заказать раскрой</Link>
        </li>
      </ul>
      <br />
    </div>
  );
};

export default RightBar;
