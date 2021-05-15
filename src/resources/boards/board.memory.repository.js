const { dataBase } = require('../../common/inMemoryDb.js');

/**
 * Эта функция возвращает массив "Досок".
 * @returns {array} Ассоциативный массив "Досок".
 */
const getAll = async () => dataBase.boards;

const getById = async (boardId) =>
  dataBase.boards.filter((el) => el.id === boardId)[0];

const addBoard = async (board) => {
  dataBase.boards.push(board);
};

const createBoard = async (newBoard) => {
  dataBase.boards.push(newBoard);
  return getById(newBoard.id);
};

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
