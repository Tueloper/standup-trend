const STANDUP = require('./../models/task');
const MODAL = require('../modal');
const request = require('../request');

module.exports = {
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
  },
  async openModal(req, res) {
    try {
      const newModal = MODAL.modal;
      console.log(req.body);
      const { channel_id, user_id, trigger_id, user_name, team_id } = JSON.parse(req.body);
      await request.openSlackModal(trigger_id, newModal);
    } catch (e) {
      res.status(500).send({ error: e });
    }
  }
}