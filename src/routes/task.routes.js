const express = require("express");
const { Router } = express;
const taskCtrl = require("../controllers/task.controller");

const router = Router();

router.get("/", taskCtrl.findAllTasks);
router.post("/", taskCtrl.addTask);
router.get("/done", taskCtrl.findTrueTask);
router.get("/:id", taskCtrl.findOneTask);
router.delete("/:id", taskCtrl.deleteOneTask);
router.put("/:id", taskCtrl.updateTask);

module.exports = router;
