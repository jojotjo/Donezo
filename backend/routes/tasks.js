const express = require("express");
const router = express.Router();

const {
    readAllTasks,
    createTask,
    readTask,
    updateTask,
    deleteTask
} =  require("../controllers/tasks");



router.route("/").get(readAllTasks).post(createTask);
router.route("/:id").get(readTask).patch(updateTask).delete(deleteTask);


module.exports=router;