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
  let indexNumber = null;
  dataBase.boards.forEach((item, index) => {
    if (item.id === boardId) {
      /* delete item.title;
      delete item.columns;
      delete item.id;

      return item; */

      indexNumber = index;
    }
  });

  dataBase.boards.splice(indexNumber, 1);
};

module.exports = {
  getAll,
  addBoard,
  updateBoard,
  deleteBoard,
  getById,
  createBoard,
};
