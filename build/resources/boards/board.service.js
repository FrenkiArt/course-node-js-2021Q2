import * as boardsRepo from './board.memory.repository';
const getAll = () => boardsRepo.getAll();
const getById = (boardId) => boardsRepo.getById(boardId);
const createBoard = (newBoard) => boardsRepo.createBoard(newBoard);
const addBoard = (board) => boardsRepo.addBoard(board);
const updateBoard = (boardArgs, boardId) => boardsRepo.updateBoard(boardArgs, boardId);
const deleteBoard = (boardId) => boardsRepo.deleteBoard(boardId);
export { getAll, addBoard, updateBoard, deleteBoard, getById, createBoard };
