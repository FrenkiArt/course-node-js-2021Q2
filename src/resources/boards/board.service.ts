import * as boardsRepo from './board.memory.repository';
import Board from '../../entity/board.model';

const getAll = () => boardsRepo.getAll();
const getById = (boardId: string) => boardsRepo.getById(boardId);
const createBoard = (newBoard: Board) => boardsRepo.createBoard(newBoard);
const addBoard = (board: Board) => boardsRepo.addBoard(board);
const updateBoard = (
  boardArgs: { title: string; columns: Array<object> },
  boardId: string
) => boardsRepo.updateBoard(boardArgs, boardId);
const deleteBoard = (boardId: string) => boardsRepo.deleteBoard(boardId);

export { getAll, addBoard, updateBoard, deleteBoard, getById, createBoard };
