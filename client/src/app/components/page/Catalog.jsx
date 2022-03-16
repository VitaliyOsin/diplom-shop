import React from "react";
import { useParams } from "react-router-dom";
import Box from "../ui/box/Box";
import Loader from "../ui/Loader";
import { useSelector } from "react-redux";
import { getCatalog, getCatalogLoadingStatus } from "../../store/catalog";
import { getProjects, getProjectsLoadingStatus } from "../../store/projects";

const Catalog = () => {
  const { name } = useParams();
  const projects = useSelector(getProjects());
  const isLoadedProjects = useSelector(getProjectsLoadingStatus());
  const catalog = useSelector(getCatalog());
  const isLoadedCatalog = useSelector(getCatalogLoadingStatus());
  return (
    <div>
      <h3>
        {!isLoadedCatalog
          ? catalog.find((cat) => cat.link === name).name
          : "Loading..."}
      </h3>
      {!isLoadedProjects ? (
        projects
          .filter((p) => p.category === name)
          .map((p) => <Box key={p._id} project={p} />)
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Catalog;
