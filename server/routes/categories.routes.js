const express = require("express");
const Categories = require("../models/Categories");
const { blockTC } = require("../utils/helpers");

const router = express.Router({ mergeParams: true });

router.route("/").get(async (req, res) => {
  blockTC(req, res, async () => {
    const list = await Categories.find();
    res.status(200).send(list);
  });
});

module.exports = router;
