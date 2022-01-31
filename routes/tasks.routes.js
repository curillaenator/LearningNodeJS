const { Router } = require("express");

const checkAuth = require("../middleware/auth.middleware");
const Project = require("../models/Project");
const Task = require("../models/Task");

const router = Router();

router.get("/tasks/:projectId", checkAuth, async (req, res) => {
  try {
    const params = req.params;

    const projectTasks = await Task.find({ projectId: params.projectId });

    res.json({ status: 201, projectTasks });
    //
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, try again" });
  }
});

router.get("/tasks/gettask/:taskId", checkAuth, async (req, res) => {
  try {
    const params = req.params;

    console.log(params);

    const task = await Task.findById(params.taskId);

    res.json({ status: 201, task });
    //
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, try again" });
  }
});

router.post("/create", checkAuth, async (req, res) => {
  try {
    const { projectId, title, description, layout } = req.body;

    const { userID } = req.user;

    const task = new Task({
      projectId,
      title,
      description,
      layout,
      owner: userID,
    });

    // console.log(task);

    // const currentProject = await Project.findById(projectId);
    // currentProject.tasks = [...currentProject.tasks, task];

    await task.save();
    // await currentProject.save();

    res.status(201).json({ status: 201, message: "Task created", task });
    //
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, try again" });
  }
});

router.delete("/delete/:taskId", checkAuth, async (req, res) => {
  try {
    const params = req.params;

    await Task.deleteOne({ _id: params.taskId });

    res.status(201).json({ status: 201, message: "Task removed" });
    //
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, try again" });
  }
});

router.put("/layout/:taskId", checkAuth, async (req, res) => {
  try {
    const params = req.params;
    const { layout } = req.body;

    const task = await Task.findById(params.taskId);

    task.layout = layout;

    task.save();

    res.status(201).json({ status: 201, message: "New position complete" });
    //
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, try again" });
  }
});

module.exports = router;
