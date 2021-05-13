const router = require('express').Router();
const fs = require('fs');
const User = require('./user.model');
const usersService = require('./user.service');

const filePath = 'src/resources/data/user.json';

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();

  // map user fields to exclude secret fields like "password"
  setTimeout(() => {
    res.status(200).json(users.map(User.toResponse));
  }, 3000);
});

/* router.route('/:userId').get(async (req, res) => {
  console.log(req, res);
}); */

router.route('/').post(async (req, res) => {
  if (!req.body) return res.sendStatus(400);

  const userArgs = req.body;
  const newUser = new User(userArgs);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    const users = JSON.parse(data);
    users.push(newUser);

    const newData = JSON.stringify(users);

    fs.writeFile(filePath, newData, (error) => {
      if (error) throw err;
    });
  });

  res.sendStatus(201);
});

/* router.route('/:userId').put(async (req, res) => {
  console.log(req, res);
});

router.route('/:userId').delete(async (req, res) => {
  console.log(req, res);
}); */

module.exports = router;
