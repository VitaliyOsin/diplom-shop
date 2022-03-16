import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Box = ({ project }) => {
  const [img, setImg] = useState("");

  /* const d = new Date(project.createdAt);
  const dat = `${d.getDate()}.${
    d.getMonth() + 1 <= 9 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1
  }.${d.getFullYear()}`; */
  useEffect(() => {
    const loadPic = async () => {
      const pic = await import(
        `../../../../assets/pic/pic/projects/${project.code}/1.jpg`
      );
      setImg(pic.default);
    };
    loadPic();
  }, []);
  return (
    <div className="box">
      <Link to={`/project/${project.code}`}>
        <img src={img} alt={project.name} />
        <div className="ban">{project.name}</div>
        {project.free ? (
          <span style={{ color: "green", fontSize: "12px" }}>Бесплатно</span>
        ) : (
          <span style={{ color: "red", fontSize: "12px" }}>
            {project.price} руб.
          </span>
        )}
        {/* <p>{dat}</p> */}
      </Link>
    </div>
  );
};

Box.propTypes = {
  project: PropTypes.object,
};

export default Box;
