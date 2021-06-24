import * as express from 'express';
import { genSalt, hash } from 'bcryptjs';
import User from '../../entity/user.model';
import * as usersService from './user.service';
import * as tasksService from '../tasks/task.service';

const router = express.Router();

router.route('/').get(async (_req, res) => {
  const users = await usersService.getAll();

  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req, res) => {
  const userById = await usersService.getById(String(req.params['userId']));

  if (userById) {
    res.status(200).json(User.toResponse(userById));
  } else {
    res.status(404).json({
      id: req.params['userId'],
      error: `Пользователя с Id ${req.params['userId']} не найдено.`,
    });
  }
});

router.route('/').post(async (req, res) => {
  /* попытка создания  пользователя с паролем*/
  const salt = await genSalt(10);
  console.log('before code password', req.body.password);
  req.body.password = await hash(req.body.password, salt);
  console.log('after code password', req.body.password);
  const user: User = await usersService.createUser(req.body);

  res.status(201).json(User.toResponse(user));
});

router.route('/:userId').put(async (req, res) => {
  const users = await usersService.getAll();

  let userIsBe = null;

  users.forEach((item: { id: string | null }) => {
    if (item.id === req.params['userId']) {
      userIsBe = true;
    }
  });

  if (userIsBe) {
    usersService.updateUser(req.body, String(req.params['userId']));
    res.status(200).json(req.body);
  } else {
    res
      .status(404)
      .json({ error: `Пользователя с Id ${req.params['userId']} не найдено.` });
  }
});

router.route('/:userId').delete(async (req, res) => {
  const users = await usersService.getAll();

  let userIsBe = null;

  users.forEach((item: { id: string | null }) => {
    if (item.id === req.params['userId']) {
      userIsBe = true;
    }
  });

  if (userIsBe) {
    usersService.deleteUser(String(req.params['userId']));
    tasksService.deleteUserIdFromAllHisTasks(String(req.params['userId']));

    res.status(204).json({ message: 'Объект удалён' });
  } else {
    res
      .status(404)
      .json({ error: `Пользователя с Id ${req.params['userId']} не найдено.` });
  }
});

export default router;
