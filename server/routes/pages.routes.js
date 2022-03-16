const express = require("express");
const cors = require("cors");

const Pages = require("../models/Pages");
const { blockTC } = require("../utils/helpers");

const router = express.Router({ mergeParams: true });

router.get("/", cors(), async (req, res) => {
  blockTC(req, res, async () => {
    const list = await Pages.find();
    res.status(200).send(list);
  });
});

module.exports = router;
