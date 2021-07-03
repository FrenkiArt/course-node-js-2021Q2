import 'reflect-metadata';
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
  // let connection;
  try {
    await createConnection();
    const connection = getConnection();
    if (!connection.isConnected) await connection.connect();
    console.log('well done');
  } catch (error) {
    console.error('getConnection failed', error);
  }
};

const TryDBConnect = async (cb: () => void) => {
  try {
    await connectToDB();
    /* const connection = getConnection();
    await connection.runMigrations(); */
    cb();
  } catch (err) {
    console.error('DB connect is error hehe');
  }
};

export { dataBase, TryDBConnect };
