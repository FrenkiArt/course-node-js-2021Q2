const Board = require('../resources/boards/board.model');
const User = require('../resources/users/user.model');
const Task = require('../resources/tasks/task.model');

const dataBase = {
  users: [
    {
      id: 'e27d8b4a-46e4-4b43-a6f5-66b764c39ada',
      name: '222',
      login: '222',
      password: 'password',
    },
  ],
  boards: [],
  tasks: [],
};

dataBase.users.push(new User(), new User(), new User());
dataBase.boards.push(new Board(), new Board(), new Board());
dataBase.tasks.push(new Task(), new Task(), new Task());

module.exports = { dataBase };
