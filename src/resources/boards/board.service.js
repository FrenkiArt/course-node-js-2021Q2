const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();
const getById = (userId) => boardsRepo.getById(userId);
const createBoard = (newBoard) => boardsRepo.createBoard(newBoard);
const addBoard = (board) => boardsRepo.addBoard(board);
const updateBoard = (boardArgs, boardId) =>
  boardsRepo.updateBoard(boardArgs, boardId);
const deleteBoard = (boardId) => boardsRepo.deleteBoard(boardId);

module.exports = {
  getAll,
  addBoard,
  updateBoard,
  deleteBoard,
  getById,
  createBoard,
};
