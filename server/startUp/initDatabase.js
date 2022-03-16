const categoriesMock = require("../mock/categories.json");
const catalogMock = require("../mock/catalog.json");
const pagesMock = require("../mock/pages.json");
const projectsMock = require("../mock/projects.json");
const Categories = require("../models/Categories");
const Catalog = require("../models/Catalog");
const Pages = require("../models/Pages");
const Projects = require("../models/Projects");

module.exports = async () => {
  const categories = await Categories.find();
  if (categories.length !== categoriesMock.length) {
    await createInitialEntities(Categories, categoriesMock);
  }

  const catalog = await Catalog.find();
  if (catalog.length !== catalogMock.length) {
    await createInitialEntities(Catalog, catalogMock);
  }

  const pages = await Pages.find();
  if (pages.length !== pagesMock.length) {
    await createInitialEntities(Pages, pagesMock);
  }

  const projects = await Projects.find();
  if (projects.length !== projectsMock.length) {
    await createInitialEntities(Projects, projectsMock);
  }
};

async function createInitialEntities(Model, data) {
  await Model.collection.drop();
  console.log("Mongo: Initial DB was updated ===>");
  return Promise.all(
    data.map(async (item) => {
      try {
        item.code = item._id;
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (err) {
        return err;
      }
    })
  );
}
