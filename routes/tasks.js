var express = require('express');
var router = new express.Router();
const task_controller = require('./../controllers/task')

router.post('/task/create', task_controller.createTask);
router.get('/tasks', task_controller.get_task);
router.post('/open-modal', task_controller.openModal);

module.exports = router;