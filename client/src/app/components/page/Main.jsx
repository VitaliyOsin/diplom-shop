import React from "react";
import { useSelector } from "react-redux";
import { getProjects, getProjectsLoadingStatus } from "../../store/projects";
import Box from "../ui/box/Box";
import Loader from "../ui/Loader";

const Main = () => {
  const projects = useSelector(getProjects());
  const isLoadedProjects = useSelector(getProjectsLoadingStatus());
  return (
    <div>
      <h3>Новинки бесплатных чертежей корпусной мебели.</h3>
      <div className="wrap-box">
        {!isLoadedProjects ? (
          projects
            .filter((pr) => pr.free)
            .reverse()
            .slice(0, 8)
            .map((p) => <Box key={p._id} project={p} />)
        ) : (
          <Loader />
        )}
      </div>
      <div className="clr"></div>

      <h3>Новинки платных чертежей корпусной мебели.</h3>
      <div className="wrap-box">
        {!isLoadedProjects ? (
          projects
            .filter((pr) => !pr.free)
            .reverse()
            .map((p) => <Box key={p._id} project={p} />)
        ) : (
          <Loader />
        )}
      </div>
      <div className="clr"></div>

      <br />
      <br />
    </div>
  );
};

export default Main;
