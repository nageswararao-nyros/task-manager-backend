var user_meetings = require('../models/user_tasks');
var tasks = require('../models/task');
// const vapidKeys = webpush.generateVAPIDKeys();

exports.getAllMyTasks = (req, res)=>{
	tasks.find({user_id: req.body.user_id}, function(err, tasks){
		res.json({
			status: 200,
			data: tasks
		})
	})
}