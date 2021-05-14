/* eslint-disable no-param-reassign */
const { dataBase } = require('../../common/inMemoryDb.js');

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

const updateBoard = async (boardArgs, boardID) => {
  dataBase.boards.forEach((item) => {
    if (item.id === boardID) {
      item.title = boardArgs.title;
      item.columns = boardArgs.columns;

      return item;
    }
    return item;
  });
};

const deleteBoard = async (boardID) => {
  dataBase.boards.forEach((item) => {
    if (item.id === boardID) {
      delete item.title;
      delete item.columns;

      return item;
    }
    return item;
  });
};

module.exports = {
  getAll,
  addBoard,
  updateBoard,
  deleteBoard,
  getById,
  createBoard,
};
