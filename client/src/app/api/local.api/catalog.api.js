export const catalog = [
  { _id: "bgtfhjGTfrFd_gor_01", name: "Горки", link: "gorki" },
  { _id: "bgtfhjGTfrFd_komod_02", name: "Комоды", link: "komodi" },
  { _id: "bgtfhjGTfrFd_krovat_03", name: "Кровати", link: "krovati" },
  {
    _id: "bgtfhjGTfrFd_krovat_det_04",
    name: "Кровати детские",
    link: "krovati-detskie",
  },
  { _id: "bgtfhjGTfrFd_kuh_05", name: "Кухни", link: "kuhny" },
  { _id: "bgtfhjGTfrFd_polki_06", name: "Полки", link: "polki" },
  { _id: "bgtfhjGTfrFd_prihozh_07", name: "Прихожии", link: "prihozhii" },
  { _id: "bgtfhjGTfrFd_prochee_08", name: "Прочее", link: "prochee" },
  { _id: "bgtfhjGTfrFd_stol_09", name: "Столы", link: "stoli" },
  {
    _id: "bgtfhjGTfrFd_stol_zhurn_10",
    name: "Столы журнальные",
    link: "stoli-zhurnalniye",
  },
  {
    _id: "bgtfhjGTfrFd_stol_kuh_11",
    name: "Столы кухонные",
    link: "stol-kuhonniy",
  },
  {
    _id: "bgtfhjGTfrFd_stol_komp_12",
    name: "Столы компьютерные",
    link: "stol-komputerniy",
  },
  {
    _id: "bgtfhjGTfrFd_stol_tualetniy_13",
    name: "Столы туалетные",
    link: "stol-tualetniy",
  },
  { _id: "bgtfhjGTfrFd_tumbochka_14", name: "Тумбочки", link: "tumbochka" },
  { _id: "bgtfhjGTfrFd_shkaf_15", name: "Шкафы", link: "shkaf" },
  { _id: "bgtfhjGTfrFd_shkaf_kupe_16", name: "Шкафы-купе", link: "shkaf-kupe" },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(catalog);
    }, 2000);
  });

const catalogFuncs = {
  fetchAll,
};

export default catalogFuncs;
