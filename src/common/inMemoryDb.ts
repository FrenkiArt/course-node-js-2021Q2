import Board from '../resources/boards/board.model';
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
