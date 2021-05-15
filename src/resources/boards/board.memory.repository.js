const { dataBase } = require('../../common/inMemoryDb.js');

/**
 * Эта функция возвращает массив "Досок".
 * @returns {array} Ассоциативный массив "Досок".
 */
const getAll = async () => dataBase.boards;

/**
 * Эта функция возвращает доску по ID.
 * @param {string} boardId - ID доски.
 * @returns {object} Объект доски.
 */
const getById = async (boardId) =>
  dataBase.boards.filter((el) => el.id === boardId)[0];

/**
 * Эта функция добавляет в базу доску.
 * @param {object} board Объект доски пользователя.
 */
const addBoard = async (board) => {
  dataBase.boards.push(board);
};

/**
 * Эта функция создания новой доски пользователя и добавления её в базу.
 * @param {object} newBoard Объект новой доски пользователя.
 * @returns {object} Объект доски.
 */
const createBoard = async (newBoard) => {
  dataBase.boards.push(newBoard);
  return getById(newBoard.id);
};

/**
 * Эта функция обновляет данные доски пользователя в базе данных.
 * @param {object} boardArgs Объект передаваемых аргументов.
 * @param {string} boardId Id доски.
 */
const updateBoard = async (boardArgs, boardId) => {
  dataBase.boards.forEach((item) => {
    if (item.id === boardId) {
      item.title = boardArgs.title;
      item.columns = boardArgs.columns;

      return item;
    }
    return item;
  });
};

/**
 * Эта функция удаляет доску пользователя из базы данных.
 * @param {string} boardId Id доски.
 */

const deleteBoard = async (boardId) => {
  let indexBoardNumber = null;
  const newDbTasks = [];

  dataBase.boards.forEach((item, index) => {
    if (item.id === boardId) {
      indexBoardNumber = index;
    }
  });

  dataBase.boards.splice(indexBoardNumber, 1);

  dataBase.tasks.forEach((item) => {
    if (item.boardId !== boardId) {
      newDbTasks.push(item);
    }
  });

  dataBase.tasks = newDbTasks;
};

module.exports = {
  getAll,
  addBoard,
  updateBoard,
  deleteBoard,
  getById,
  createBoard,
};
