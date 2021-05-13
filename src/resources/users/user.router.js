const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();

  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

/* router.route('/:userId').get(async (req, res) => {
  console.log(req, res);
}); */

router.route('/').post(async (req, res) => {
  if (!req.body) return res.sendStatus(400);

  const userArgs = req.body;
  const newUser = new User(userArgs);
  await usersService.addNewUser(newUser);

  return res.sendStatus(201);
});

/* router.route('/:userId').put(async (req, res) => {
  console.log(req, res);
});

router.route('/:userId').delete(async (req, res) => {
  console.log(req, res);
}); */

module.exports = router;
