const { Router } = require("express");
// const { check, validationResult } = require("express-validator");
// const config = require("config");

const checkAuth = require("../middleware/auth.middleware");
const Project = require("../models/Project");
// const User = require("../models/User");
const Task = require("../models/Task");

const router = Router();

router.post("/tasks", checkAuth, async (req, res) => {
  try {
    const { projectId } = req.body;

    const projectTasks = await Task.find({ projectId });

    res.json({ status: 201, projectTasks });
    //
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, try again" });
  }
});

router.post("/create", checkAuth, async (req, res) => {
  try {
    const { projectId, title, description, layout } = req.body;

    const task = new Task({
      projectId,
      title,
      description,
      layout,
      owner: req.user.userID,
    });

    const currentProject = await Project.findById(projectId);
    currentProject.tasks = [...currentProject.tasks, task];

    await task.save();
    await currentProject.save();

    res
      .status(201)
      .json({ status: 201, message: "Task created", newTask: task });

    //
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, try again" });
  }
});

module.exports = router;
