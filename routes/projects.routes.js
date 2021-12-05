const { Router } = require("express");
// const { check, validationResult } = require("express-validator");
const config = require("config");

const checkAuth = require("../middleware/auth.middleware");
const Project = require("../models/Project");

const router = Router();

router.post(
  "/create",
  checkAuth,
  // [check("title", "Минимум 8 символов").isLength({ min: 8 })],
  async (req, res) => {
    console.log("Body: ", req.body);

    try {
      const baseURL = config.get("baseURL");

      // const errors = validationResult(req);

      // if (!errors.isEmpty()) {
      //   res.status(400).json({
      //     errors: errors.array(),
      //     message: "Invalid project data",
      //   });
      // }

      const { title } = req.body;

      const project = new Project({ title, owner: req.userID });

      await project.save();

      res
        .status(201)
        .json({ status: 201, message: "Project created!", project });
      //
    } catch (error) {
      res.status(500).json({ message: "Something went wrong, try again" });
    }
  }
);

router.get("/available", checkAuth, async (req, res) => {
  try {
    const availableProjects = await Project.find({ owner: req.user.userID });

    res.json(availableProjects);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, try again" });
  }
});

router.get("/:projectId", checkAuth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);

    res.json(project);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, try again" });
  }
});

module.exports = router;
