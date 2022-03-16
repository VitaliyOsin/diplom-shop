const express = require("express");
const Catalog = require("../models/Catalog");
const { blockTC } = require("../utils/helpers");

const router = express.Router({ mergeParams: true });

router.route("/").get(async (req, res) => {
  blockTC(req, res, async () => {
    const list = await Catalog.find();
    res.status(200).send(list);
  });
});

module.exports = router;
