import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { copyObj } from "../../utils/funcs";
import downloadImg from "../../../assets/pic/pic/icon-download.png";
import BackBtn from "../ui/BackBtn";
import Loader from "../ui/Loader";
import { animateScroll as scroll } from "react-scroll";

const Download = () => {
  const { id } = useParams();
  const [project, setProject] = useState();
  const [pdf, setPdf] = useState();
  const getProject = async (projectId) => {
    const proj = await import(`../../api/local.api/projects/${projectId}.json`);
    setProject(copyObj(proj.default));
    if (proj.default.free) {
      getPdf(proj.default._id);
    }
  };
  const getPdf = async (projectId) => {
    const res = await import(`../../../assets/files/${projectId}.pdf`);
    setPdf(res.default);
  };

  useEffect(() => {
    getProject(id);
  }, []);
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <>
      {project ? (
        <div
          className="boxpay"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 25,
          }}
        >
          {project.free ? (
            <>
              <p>
                Нажмите на ссылку "Скачать бесплатно", чтобы сохранить проект у
                себя на компьютере.
                <br />{" "}
              </p>
              <div className="box4">
                <img src={downloadImg} alt="" />
                <a
                  href={pdf}
                  download={`${project.name + "-" + Date.now()}.pdf`}
                >
                  <h5>
                    Скачать
                    <br />
                    бесплатно.
                  </h5>
                </a>
              </div>
            </>
          ) : (
            <>
              <div style={{ marginTop: "30px" }}>
                C этой страницы Вы перейдёте на страницу оплаты за проект
                <h4>{project.name},</h4> где сможете совершить платёж с помощью
                <br /> QIWI, WebMoney, Яндекс-Деньги и другими удобными для Вас
                способами.
                <br />{" "}
              </div>
              <div
                className="box4"
                style={{ margin: "0 auto", marginTop: "15px" }}
              >
                <img src={downloadImg} alt="" />
                <a
                  href={
                    "https://www.oplata.info/asp/pay_wm.asp?id_d=" +
                    project.dgNumber
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>
                    Оплатить
                    <br />
                    {project.price}р.
                  </h5>
                </a>
              </div>
            </>
          )}

          <h4>Спасибо, что выбрали нас!</h4>
          <BackBtn />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Download;
