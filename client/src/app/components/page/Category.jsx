import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getCategories,
  getCategoriesLoadingStatus,
} from "../../store/categories";
import { getProjects, getProjectsLoadingStatus } from "../../store/projects";
import Box from "../ui/box/Box";
import Loader from "../ui/Loader";
import _ from "lodash";

const Category = () => {
  const { name } = useParams();
  const projects = useSelector(getProjects());
  const isLoadedProjects = useSelector(getProjectsLoadingStatus());
  const categories = useSelector(getCategories());
  const isLoadedCatalog = useSelector(getCategoriesLoadingStatus());
  const newProjetsFilter = (projects) => {
    try {
      if (!isLoadedProjects) {
        if (name === "new") return _.orderBy(projects, ["code"]).slice(0, 8);
        return projects;
      } else {
        return <Loader />;
      }
    } catch (err) {
      console.log(err);
      return <Loader />;
    }
  };

  return (
    <div>
      <h3>
        {!isLoadedCatalog ? (
          categories.find((cat) => cat.link === name).name
        ) : (
          <Loader />
        )}
      </h3>
      {!isLoadedProjects ? (
        newProjetsFilter(projects)
          .filter((p) => p[name] === true)
          .map((p) => <Box key={p._id} project={p} />)
          .slice(0, 8)
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Category;
