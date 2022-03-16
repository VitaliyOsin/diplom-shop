import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import "../../../assets/css/style2.css";
import { copyObj } from "../../utils/funcs";
import LinkBtn from "../ui/LinkBtn";
import DownloadBtn from "../ui/DownloadBtn";
import { animateScroll as scroll } from "react-scroll";

const Project = () => {
  const { id } = useParams();
  console.log(id);
  const [pinfo, setPinfo] = useState({});
  const [imgPath, setImgPath] = useState("");
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  useEffect(async () => {
    const data = await import(`../../api/local.api/projects/${id}.json`);
    const newData = copyObj(data.default);
    const picWay = await import(`../../../assets/pic/pic/projects/${id}/1.jpg`);
    setPinfo(newData);
    setImgPath(picWay.default);
  }, [id]);
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <div>
      <h3>{pinfo.h3name}</h3>
      <div className="box3">
        <div className="box3img">
          <div style={{ textAlign: "center" }}>
            <img src={imgPath} alt="" />
          </div>
        </div>
        <div className="box3dl">
          <p>{pinfo.content}</p>
          <dl>
            <dt>Характеристики проекта:</dt>
            {
              <dd>
                Габариты: {pinfo?.gabarit?.h && pinfo?.gabarit?.h}(В)х
                {pinfo?.gabarit?.w}(Ш)х
                {pinfo?.gabarit?.l}(Г);
              </dd>
            }
            <dd>Размер файла: {pinfo.fileSize};</dd>
            <dd>Количество страниц: {pinfo.filePages};</dd>
            <dd>Номер проекта: {pinfo._id}.</dd>
          </dl>
          <dl>
            <dt>Проект содержит в себе:</dt>
            <dd>1. Чертежи и схемы сборки;</dd>
            <dd>2. Карты раскроя;</dd>
            <dd>3. Список деталей.</dd>
            <dd>4. Список фурнитуры.</dd>
            {pinfo.optraskroy ? (
              <dd>
                5. Оптимальный раскрой (
                <Link to="/article/optraskroy">что это?</Link>), в который
                входит: {pinfo.name}
                {pinfo?.selfCountForOptRaskroy
                  ? " - " + pinfo.selfCountForOptRaskroy + " шт"
                  : ""}
                ,{" "}
                {pinfo.optraskroy.map((op, i) => (
                  <Link to={"/project/" + op.link}>
                    {" "}
                    {op.name}
                    {op.count > 1 ? " - " + op.count : ""}
                    {i !== pinfo.optraskroy.length - 1 ? ", " : ""}
                  </Link>
                ))}
                .
              </dd>
            ) : (
              ""
            )}
          </dl>
          <div style={{ textAlign: "center" }}>
            {pinfo.free ? (
              <DownloadBtn
                link={`/download/${id}`}
                text={`Скачать \n  бесплатно`}
              />
            ) : (
              <DownloadBtn
                link={`/download/${id}`}
                text={`Купить      \n ${pinfo.price} руб.`}
              />
            )}

            <LinkBtn linkFn={handleBack} text="Назад" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
