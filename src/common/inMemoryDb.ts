import Board from '../entity/board.model';
import Task from '../entity/task.model';
import User from '../entity/user.model';

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
