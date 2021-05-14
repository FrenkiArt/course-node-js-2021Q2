const User = require('../resources/users/user.model');

const dataBase = [
  {
    id: 'e27d8b4a-46e4-4b43-a6f5-66b764c39ada',
    name: '222',
    login: '222',
    password: 'password',
  },
];

dataBase.push(new User(), new User(), new User());

module.exports = { dataBase };
