import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsLoggedIn,
  getUsersLoadingStatus,
  loadUsersList,
} from "../../../store/users";
import { loadCategoriesList } from "../../../store/categories";
import { loadCatalog } from "../../../store/catalog";
import { loadProjectsList } from "../../../store/projects";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn());
  const usersStatusLoading = useSelector(getUsersLoadingStatus());
  console.log("Loader: ", isLoggedIn, usersStatusLoading);
  useEffect(() => {
    dispatch(loadCategoriesList());
    dispatch(loadCatalog());
    dispatch(loadProjectsList());
    if (isLoggedIn) {
      dispatch(loadUsersList());
    }
  }, [dispatch]);
  if (usersStatusLoading) return "loading";
  return children;
};

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default AppLoader;
