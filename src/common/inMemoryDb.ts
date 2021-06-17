import { createConnection, getConnection } from 'typeorm';
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

const connectToDB = async () => {
  let connection;

  try {
    connection = getConnection();
  } catch (err) {
    // handle error
  }

  try {
    if (connection) {
      if (!connection.isConnected) {
        await connection.connect();
      }
    } else {
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        username: 'postgres',
        password: 'postgres',
      });
    }

    console.log('Successfully connected to our base. Yahooo!');
  } catch (err) {
    // handle error
    console.log('connection to DB is Error ((');
    console.log(err);
  }
};

const TryDBConnect = async (cb: () => void) => {
  try {
    await connectToDB();
    cb();
  } catch (err) {
    console.error('DB connect is error');
  }
};

export { dataBase, TryDBConnect };
