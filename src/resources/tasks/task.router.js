const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();

  res.json(tasks);
});

router.route('/:taskId').get(async (req, res) => {
  const taskById = await tasksService.getById(req.params.taskId);

  if (taskById) {
    res.status(200).json(taskById);
  } else {
    res.status(404).json({
      id: req.params.taskId,
      error: `Такой задачи с Id ${req.params.taskId} не найдено.`,
    });
  }
});

router.route('/').post(async (req, res) => {
  const task = await tasksService.createTask(new Task(req.body));
  res.status(201).json(task);
});

router.route('/:taskId').put(async (req, res) => {
  const tasks = await tasksService.getAll();

  let taskIsBe = null;

  tasks.forEach((item) => {
    if (item.id === req.params.taskId) {
      taskIsBe = true;
    }
  });

  if (taskIsBe) {
    tasksService.updateTask(req.body, req.params.taskId);
    res.status(200).json(req.body);
  } else {
    res
      .status(404)
      .json({ error: `Задачи с Id ${req.params.taskId} не найдено.` });
  }
});

router.route('/:taskId').delete(async (req, res) => {
  const tasks = await tasksService.getAll();

  let taskIsBe = null;

  tasks.forEach((item) => {
    if (item.id === req.params.taskId) {
      taskIsBe = true;
    }
  });

  if (taskIsBe) {
    tasksService.deleteTask(req.params.taskId);
    res.status(204).json({ message: 'Объект удалён' });
  } else {
    res
      .status(404)
      .json({ error: `Задачи с Id ${req.params.taskId} не найдено.` });
  }
});

module.exports = router;
