var express = require('express');
var router = express.Router();

var usersController = require('../controllers/user_controller')
var dashboardController = require('../controllers/dashboard_controller')
var authController = require('../controllers/auth_controller')
var userController = require('../controllers/tasks_controller')

router.route('/login').post(authController.login)
router.route('/signUp').post(usersController.save_user)

// My Tasks
router.route('/my-tasks').post(userController.getAllMyTasks)
router.route('/task/:task_id').get(userController.edit_task)
router.route('/task/:task_id/update').post(userController.update_task)

module.exports = router;