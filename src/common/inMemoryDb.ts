// const Board = require('../resources/boards/board.model');
// const User = require('../resources/users/user.model');
// const Task = require('../resources/tasks/task.model');

interface DataBase {
  users: [];
  boards: [];
  tasks: [];
}

const dataBase: DataBase = {
  users: [],
  boards: [],
  tasks: [],
};

export { dataBase };
