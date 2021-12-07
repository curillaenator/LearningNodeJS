const { Router } = require("express");
// const { check, validationResult } = require("express-validator");
// const config = require("config");

const checkAuth = require("../middleware/auth.middleware");
const Project = require("../models/Project");
const User = require("../models/User");

const router = Router();

router.post("/create", checkAuth, async (req, res) => {
  console.log("Body: ", req.body);

  try {
    const { title } = req.body;

    const project = new Project({ title, owner: req.user.userID });

    const user = await User.findById(req.user.userID);

    user.ownedProjects = [...user.ownedProjects, project];

    await project.save();

    await user.save();

    res.status(201).json({ status: 201, message: "Project created!", project });
    //
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, try again" });
  }
});

router.get("/owned", checkAuth, async (req, res) => {
  try {
    const availableProjects = await Project.find({ owner: req.user.userID });

    res.json({ status: 201, availableProjects });
    //
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, try again" });
  }
});

router.get("/contribution", checkAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userID);

    const contributedProjects = await Project.find(user.contributionProjects);

    res.json({ status: 201, contributedProjects });
    //
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, try again" });
  }
});

router.get("/:projectId", checkAuth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);

    res.json({ status: 201, project });
    //
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, try again" });
  }
});

module.exports = router;
