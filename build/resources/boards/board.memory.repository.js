"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBoard = exports.getById = exports.deleteBoard = exports.updateBoard = exports.addBoard = exports.getAll = void 0;
const typeorm_1 = require("typeorm");
// import { dataBase } from '../../common/inMemoryDb';
// import Task from '../../entity/task.model';
const board_model_1 = __importDefault(require("../../entity/board.model"));
/**
 * This function returns an array of "Boards".
 * Эта функция возвращает массив "Досок".
 * @return {array} Associative array of "Boards".| Ассоциативный массив "Досок".
 */
const getAll = async () => {
    // dataBase.boards;
    const boardRepository = typeorm_1.getRepository(board_model_1.default);
    return boardRepository.find();
};
exports.getAll = getAll;
/**
 * This function returns the board by ID.
 * Эта функция возвращает доску по ID.
 * @param {string} boardId - Board ID.| ID доски.
 * @return {objecta | Board} Board object.| Объект доски.
 */
const getById = async (boardId) => {
    // dataBase.boards.filter((el) => el.id === boardId)[0];
    const boardRepository = typeorm_1.getRepository(board_model_1.default);
    const boardById = await boardRepository.findOne(boardId);
    return boardById;
};
exports.getById = getById;
/**
 * This function adds a board to the database.
 * Эта функция добавляет в базу доску.
 * @param {Board} newBoard The user's board object.|
 * Объект доски пользователя.
 */
const addBoard = async (newBoard) => {
    // dataBase.boards.push(board);
    const boardRepository = typeorm_1.getRepository(board_model_1.default);
    boardRepository.save(newBoard);
};
exports.addBoard = addBoard;
/**
 * This function creates a new user board and adds it to the database.
 * Эта функция создания новой доски пользователя и добавления её в базу.
 * @param {object} reqBody - объект для новой доски
 * @param {object | Board} newBoard The object of the user's new board.| Объект
 * новой доски пользователя.
 * @return {object | Board} Board object.| Объект доски.
 */
const createBoard = async (reqBody) => {
    // dataBase.boards.push(newBoard);
    // return getById(newBoard.id);
    const boardRepository = typeorm_1.getRepository(board_model_1.default);
    const newBoard = boardRepository.create(reqBody);
    boardRepository.save(newBoard);
    return newBoard;
};
exports.createBoard = createBoard;
/**
 * This function updates the user's board data in the database.
 * Эта функция обновляет данные доски пользователя в базе данных.
 * @param {object} boardArgs The object of the arguments to be passed.|
 * Объект передаваемых аргументов.
 * @param {string} boardId Board ID.| Id доски.
 */
const updateBoard = async (boardArgs, boardId) => {
    /* dataBase.boards.forEach((item) => {
      if (item.id === boardId) {
        item.title = boardArgs.title;
        item.columns = boardArgs.columns;
  
        return item;
      }
      return item;
    }); */
    const boardRepository = typeorm_1.getRepository(board_model_1.default);
    const updatedBoard = await boardRepository.update(boardId, boardArgs);
    return updatedBoard;
};
exports.updateBoard = updateBoard;
/**
 * This function removes the user's board from the database.
 * Эта функция удаляет доску пользователя из базы данных.
 * @param {string} boardId Board ID.| Id доски.
 */
const deleteBoard = async (boardId) => {
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
    /* await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Task)
      .where('boardId = :boardId', { boardId })
      .execute(); */
    await typeorm_1.getConnection()
        .createQueryBuilder()
        .delete()
        .from(board_model_1.default)
        .where('id = :boardId', { boardId })
        .execute();
};
exports.deleteBoard = deleteBoard;
