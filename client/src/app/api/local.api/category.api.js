export const category = [
  { _id: "cat01", name: "Новинки", link: "new" },
  { _id: "cat02", name: "Популярные", link: "hit" },
  { _id: "cat03", name: "Бесплатные", link: "free" },
  { _id: "cat04", name: "Платные", link: "sale" },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(category);
    }, 2000);
  });

const categoryFuncs = {
  fetchAll,
};

export default categoryFuncs;
