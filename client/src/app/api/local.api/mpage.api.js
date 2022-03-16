export const mpage = [
  { _id: "p01", title: "Главная", link: "main" },
  {
    _id: "p02",
    title: "Что такое готовые проекты?",
    link: "chto-takoe-gotovie-proekti",
  },
  {
    _id: "p03",
    title: "Инструменты для мебельщиков",
    link: "instrumenti-dlya-mebelschikov",
  },
  { _id: "p04", title: "Скачать", link: "download" },
  { _id: "p05", title: "Напишите нам", link: "napishite-nam" },
  { _id: "p06", title: "Ссылки", link: "links" },
  {
    _id: "p07",
    title: "Хочу знать о новых проектах",
    link: "hochu-znat-o-novih-proektah",
  },
  { _id: "p08", title: "Блог", link: "blog" },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(mpage);
    }, 200);
  });

const mpageFuncs = {
  fetchAll,
};

export default mpageFuncs;
