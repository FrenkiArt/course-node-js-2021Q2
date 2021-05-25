// const Board = require('../resources/boards/board.model');
// const User = require('../resources/users/user.model');
// const Task = require('../resources/tasks/task.model');

import Task from '../resources/tasks/task.model';
import User from '../resources/users/user.model';

interface DataBase {
  users: Array<User>;
  boards: Array<Board>;
  tasks: Array<Task>;
}

const dataBase: DataBase = {
  users: [],
  boards: [],
  tasks: [],
};

export { dataBase };
