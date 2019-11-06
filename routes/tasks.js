var express = require('express');
var router = new express.Router();
const task_controller = require('./../controllers/task')

router.get('/', task_controller.testing )
router.post('/task/create', task_controller.createTask);
router.get('/tasks', task_controller.get_task);

module.exports = router;