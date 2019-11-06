const STANDUP = require('./../models/task');

module.exports = {
  testing(req, res) {
    res.send('This is an Express App')
  },

  async createTask(req, res) {
    
    try {
      const taskNew = new STANDUP(req.query);
      // return console.log(taskNew)
      await taskNew.save();
      res.status(201).send({ taskNew })
    } catch (err) {
      res.status(400).send(err)
    }
  },

  async get_task(req, res) {

    try {
      const tasks = await STANDUP.find({});

      res.status(200).send({
        Message: 'Users Gotten successfully',
        tasks
      })
    } catch (e) {
      res.status(500).send(e)
    }
  }
}