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

exports.edit_task = (req, res)=>{
	tasks.findOne({_id: req.params.task_id}, function(err, task){
		res.json({
			status: 200,
			data: task
		})
	})
}

exports.update_task = (req, res)=>{
    tasks.updateOne({_id:req.params.task_id},{$set:{
    	status: req.body.status
    }}, function(err, update_task){
      console.log(err, update_task)
      if(update_task && update_task.nModified === 1){
        console.log("Status success")
        res.json({
          status: 200,
          message: "Updated successfully"
          });
      }else{
        console.log(err, "11111111111111")
        res.json({
          status: 400,
          message: "Task Not Updated"
          });
      }
    })
}
