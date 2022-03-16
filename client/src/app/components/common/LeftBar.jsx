import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getCategories,
  getCategoriesLoadingStatus,
} from "../../store/categories";
import { getCatalog, getCatalogLoadingStatus } from "../../store/catalog";
import CustomProfile from "../ui/customProfile/CustomProfile";

const LeftBar = () => {
  const category = useSelector(getCategories());
  const catalog = useSelector(getCatalog());
  const isLoadedCategories = useSelector(getCategoriesLoadingStatus());
  const isLoadedCatalog = useSelector(getCatalogLoadingStatus());

  return (
    <div id="lside">
      <ul className="list">
        <li>
          <h2>Категории:</h2>
        </li>
      </ul>
      <ul className="list">
        {!isLoadedCategories
          ? category.map((cat) => (
              <li key={cat._id}>
                <Link to={`/category/${cat.link}`}>{cat.name}</Link>
              </li>
            ))
          : "Loading ..."}
      </ul>

      <ul className="list">
        <li>
          <h2>Каталог проектов:</h2>
        </li>

        <span>
          {!isLoadedCatalog
            ? catalog.map((catal) => (
                <li key={catal._id}>
                  <Link to={`/catalog/${catal.link}`}>{catal.name}</Link>
                </li>
              ))
            : "Loading ..."}
        </span>
      </ul>

      <br />
    </div>
  );
};

export default LeftBar;
