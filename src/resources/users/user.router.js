const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();

  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req, res) => {
  const users = await usersService.getAll();

  let user = null;

  users.forEach((item) => {
    if (item.id === req.params.userId) {
      user = item;
      delete user.password;
    }
  });

  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send();
  }
});

router.route('/').post(async (req, res) => {
  if (!req.body) return res.sendStatus(400);

  const userArgs = req.body;
  const newUser = new User(userArgs);
  await usersService.addNewUser(newUser);

  return res.sendStatus(201);
});

router.route('/:userId').put(async (req, res) => {
  const users = await usersService.getAll();

  let userIsBe = null;
  const newDB = [];

  users.forEach((item) => {
    let newItem = {};

    if (item.id === req.params.userId) {
      newItem = req.body;
      userIsBe = true;
    } else {
      newItem = item;
    }

    newDB.push(newItem);
  });

  if (userIsBe) {
    usersService.updateUser(newDB);
    res.status(200).send();
  } else {
    res.status(404).send();
  }
});

/* 
router.route('/:userId').delete(async (req, res) => {
  console.log(req, res);
}); */

module.exports = router;
