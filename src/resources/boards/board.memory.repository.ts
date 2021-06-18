import { getRepository } from 'typeorm';
// import { dataBase } from '../../common/inMemoryDb';
import Task from '../../entity/task.model';
import Board from '../../entity/board.model';

/**
 * This function returns an array of "Boards".
 * Эта функция возвращает массив "Досок".
 * @return {array} Associative array of "Boards".| Ассоциативный массив "Досок".
 */
const getAll = async () => {
  // dataBase.boards;
  const boardRepository = getRepository(Board);
  return boardRepository.find();
};

/**
 * This function returns the board by ID.
 * Эта функция возвращает доску по ID.
 * @param {string} boardId - Board ID.| ID доски.
 * @return {objecta | Board} Board object.| Объект доски.
 */
const getById = async (boardId: string) => {
  // dataBase.boards.filter((el) => el.id === boardId)[0];
  const boardRepository = getRepository(Board);
  const boardById = await boardRepository.findOne(boardId);
  return boardById;
};

/**
 * This function adds a board to the database.
 * Эта функция добавляет в базу доску.
 * @param {Board} newBoard The user's board object.|
 * Объект доски пользователя.
 */
const addBoard = async (newBoard: Board) => {
  // dataBase.boards.push(board);
  const boardRepository = getRepository(Board);
  boardRepository.save(newBoard);
};

/**
 * This function creates a new user board and adds it to the database.
 * Эта функция создания новой доски пользователя и добавления её в базу.
 * @param {object} reqBody - объект для новой доски
 * @param {object | Board} newBoard The object of the user's new board.| Объект
 * новой доски пользователя.
 * @return {object | Board} Board object.| Объект доски.
 */
const createBoard = async (reqBody: object) => {
  // dataBase.boards.push(newBoard);
  // return getById(newBoard.id);
  const boardRepository = getRepository(Board);
  const newBoard = boardRepository.create(reqBody);
  const newSavedBoard = boardRepository.save(newBoard);
  return newSavedBoard;
};

/**
 * This function updates the user's board data in the database.
 * Эта функция обновляет данные доски пользователя в базе данных.
 * @param {object} boardArgs The object of the arguments to be passed.|
 * Объект передаваемых аргументов.
 * @param {string} boardId Board ID.| Id доски.
 */
const updateBoard = async (
  boardArgs: { title: string; columns: Array<object> },
  boardId: string
) => {
  /* dataBase.boards.forEach((item) => {
    if (item.id === boardId) {
      item.title = boardArgs.title;
      item.columns = boardArgs.columns;

      return item;
    }
    return item;
  }); */

  const boardRepository = getRepository(Board);
  const updatedBoard = await boardRepository.update(boardId, boardArgs);
  return updatedBoard;
};

/**
 * This function removes the user's board from the database.
 * Эта функция удаляет доску пользователя из базы данных.
 * @param {string} boardId Board ID.| Id доски.
 */
const deleteBoard = async (boardId: string) => {
  /* const newDbTasks: Task[] = [];

  dataBase.boards.forEach((item, index) => {
    if (item.id === boardId) {
      dataBase.boards.splice(index, 1);
    }
  });

  dataBase.tasks.forEach((item) => {
    if (item.boardId !== boardId) {
      newDbTasks.push(item);
    }
  });

  dataBase.tasks = newDbTasks; */
  const taskRepository = await getRepository(Task);
  await taskRepository
    .createQueryBuilder('task')
    .delete()
    .where(`boardId = ${boardId}`, { boardId })
    .execute();

  const boardRepository = getRepository(Board);
  const deletedBoard = await boardRepository.softDelete(boardId);
  return deletedBoard;
};

export { getAll, addBoard, updateBoard, deleteBoard, getById, createBoard };
