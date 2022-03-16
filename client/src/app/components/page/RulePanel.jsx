import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects, getProjectsLoadingStatus } from "../../store/projects";
import Loader from "../ui/Loader";
import { useParams, Link } from "react-router-dom";
import { getCatalog, getCatalogLoadingStatus } from "../../store/catalog";
import { getUsersList, getUsersLoadingStatus, logOut } from "../../store/users";
import BackBtn from "../ui/BackBtn";

const RulePanel = () => {
  const dispatch = useDispatch();
  const { item } = useParams();
  const titleObj = {
    projects: "Проекты",
    catalog: "Каталог",
    users: "Список пользователей",
  };
  const [title, setTitle] = useState("Панель управления.");
  const projects = useSelector(getProjects());
  const catalog = useSelector(getCatalog());
  const users = useSelector(getUsersList());
  const isLoadedProjects = useSelector(getProjectsLoadingStatus());
  const isLoadedCatalog = useSelector(getCatalogLoadingStatus());
  const isLoadedUsers = useSelector(getUsersLoadingStatus());
  useEffect(() => {
    setTitle(titleObj[item]);
  }, [item]);
  console.log(users);
  switch (item) {
    case "projects":
      return (
        <div>
          <h3>Проекты.</h3>
          <ul>
            {!isLoadedProjects ? (
              projects.map((p) => (
                <li key={p._id}>
                  <Link to={`/project/${p.code}`}>{p.name}</Link>
                </li>
              ))
            ) : (
              <Loader />
            )}
          </ul>
          <BackBtn />
        </div>
      );
    case "catalog":
      return (
        <div>
          <h3>Каталог.</h3>
          <ul>
            {!isLoadedCatalog ? (
              catalog.map((cat) => (
                <li key={cat._id}>
                  <Link to={`/catalog/${cat.link}`}>{cat.name}</Link>
                </li>
              ))
            ) : (
              <Loader />
            )}
          </ul>
          <BackBtn />
        </div>
      );
    case "users":
      return (
        <div>
          <h3>Список пользователей.</h3>
          <ul>
            {!isLoadedUsers ? (
              users.map((u) => (
                <li key={u._id}>
                  <Link to={`/project/${u._id}`}>{u.name}</Link>
                </li>
              ))
            ) : (
              <Loader />
            )}
          </ul>
          <BackBtn />
        </div>
      );
    case "edit":
      return (
        <div>
          <h3>Редактировать.</h3>
          <p>{item}</p>
          <BackBtn />
        </div>
      );
    case "logout":
      dispatch(logOut());
    default:
      break;
  }
  return (
    <div>
      <h3>Панель управления.</h3>
      <ul>
        <li>
          <Link to="/rulepanel/projects">Проекты</Link>
        </li>
        <li>
          <Link to="/rulepanel/users">Пользователи</Link>
        </li>
        <li>
          <Link to="/rulepanel/catalog">Каталог</Link>
        </li>
      </ul>
      <BackBtn />
    </div>
  );
};

export default RulePanel;
