const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();

  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req, res) => {
  const userById = await usersService.getById(req.params.userId);

  if (userById) {
    res.status(200).json(User.toResponse(userById));
  } else {
    res.status(404).json({
      id: req.params.userId,
      error: `Пользователя с Id ${req.params.userId} не найдено.`,
    });
  }
});

router.route('/').post(async (req, res) => {
  const user = await usersService.createUser(new User(req.body));
  res.status(201).json(User.toResponse(user));
});

router.route('/:userId').put(async (req, res) => {
  const users = await usersService.getAll();

  let userIsBe = null;

  users.forEach((item) => {
    if (item.id === req.params.userId) {
      userIsBe = true;
    }
  });

  if (userIsBe) {
    usersService.updateUser(req.body, req.params.userId);
    res.status(200).json(req.body);
  } else {
    res
      .status(404)
      .json({ error: `Пользователя с Id ${req.params.userId} не найдено.` });
  }
});

router.route('/:userId').delete(async (req, res) => {
  const users = await usersService.getAll();

  let userIsBe = null;

  users.forEach((item) => {
    if (item.id === req.params.userId) {
      userIsBe = true;
    }
  });

  if (userIsBe) {
    usersService.deleteUser(req.params.userId);
    res.status(204).json({ message: 'Объект удалён' });
  } else {
    res
      .status(404)
      .json({ error: `Пользователя с Id ${req.params.userId} не найдено.` });
  }
});

module.exports = router;
