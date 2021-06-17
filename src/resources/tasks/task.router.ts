import * as express from 'express';
import Task from '../../entity/task.model';
import * as tasksService from './task.service';

const router = express.Router({ mergeParams: true });

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll(String(req.params['boardId']));

  if (tasks.length > 0) {
    res.status(200).json(tasks);
  } else {
    res.status(404).json({
      boardId: req.params['boardId'],
      error: `Задач с boardId ${req.params['boardId']} не найдено`,
    });
  }
});

router.route('/:taskId').get(async (req, res) => {
  const taskById = await tasksService.getById({
    boardId: String(req.params['boardId']),
    taskId: String(req.params['taskId']),
  });

  if (taskById) {
    res.status(200).json(taskById);
  } else {
    res.status(404).json({
      id: req.params['taskId'],
      error: `Такой задачи с Id ${req.params['taskId']} не найдено.`,
    });
  }
});

router.route('/').post(async (req, res) => {
  if (req.body.boardId === null) {
    req.body.boardId = req.params['boardId'];
  }

  const task = await tasksService.createTask(new Task(req.body));
  res.status(201).json(task);
});

router.route('/:taskId').put(async (req, res) => {
  const tasks = await tasksService.getAll(String(req.params['boardId']));

  let taskIsBe = null;

  tasks.forEach((item) => {
    if (item.id === req.params['taskId']) {
      taskIsBe = true;
    }
  });

  if (taskIsBe) {
    tasksService.updateTask(req.body, req.params['taskId']);
    res.status(200).json(req.body);
  } else {
    res
      .status(404)
      .json({ error: `Задачи с Id ${req.params['taskId']} не найдено.` });
  }
});

router.route('/:taskId').delete(async (req, res) => {
  const tasks = await tasksService.getAll(String(req.params['boardId']));

  let taskIsBe = null;

  tasks.forEach((item) => {
    if (item.id === req.params['taskId']) {
      taskIsBe = true;
    }
  });

  if (taskIsBe) {
    tasksService.deleteTask(req.params['taskId']);
    res.status(204).json({ message: 'Объект удалён' });
  } else {
    res
      .status(404)
      .json({ error: `Задачи с Id ${req.params['taskId']} не найдено.` });
  }
});

export default router;
