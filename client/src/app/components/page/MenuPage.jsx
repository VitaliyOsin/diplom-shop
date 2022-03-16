import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const MenuPage = () => {
  const history = useHistory();
  const { name } = useParams();
  useEffect(() => {
    if (name === "main") {
      history.push("/");
    }
    if (name === "blog") {
      history.push("/blog");
    }
  }, [name, history]);
  return (
    <div>
      <h1>Menu Page - {name}</h1>
    </div>
  );
};

export default MenuPage;
