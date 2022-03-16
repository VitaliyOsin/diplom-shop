const express = require("express");
const Projects = require("../models/Projects");
const auth = require("../middleware/auth.middleware");
const { blockTC } = require("../utils/helpers");

const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  blockTC(req, res, async () => {
    const list = await Projects.find();
    res.status(200).send(list);
  });
});

router.patch("/:projectId", auth, async (req, res) => {
  blockTC(req, res, async () => {
    const { projectId } = req.params;

    if (projectId === req.project._id) {
      const updatedProject = await Projects.findByIdAndUpdate(
        projectId,
        req.body,
        {
          new: true,
        }
      );
      res.send(updatedProject);
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  });
});

module.exports = router;
