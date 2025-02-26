const Task = require("../models/task.model");

const getTasks = async (req, res) => {
  const find = {
    deleted: false,
  };
  if (req.query.status) {
    find.status = req.query.status;
  }
  try {
    const tasks = await Task.find(find);
    res.json(tasks);
  } catch (error) {
    res.status(404).json("Không có tasks nào");
  }
};
const getTaskDetail = async (req, res) => {
  let id = req.params.id;
  try {
    const task = await Task.findOne({
      _id: id,
      deleted: false,
    });
    res.json(task);
  } catch (error) {
    res.status(404).json("Không tồn tại");
  }
};
module.exports = { getTasks, getTaskDetail };
