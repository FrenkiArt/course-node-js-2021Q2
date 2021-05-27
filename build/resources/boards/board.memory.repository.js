"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBoard = exports.getById = exports.deleteBoard = exports.updateBoard = exports.addBoard = exports.getAll = void 0;
const inMemoryDb_1 = require("../../common/inMemoryDb");
/**
 * This function returns an array of "Boards".
 * Эта функция возвращает массив "Досок".
 * @return {array} Associative array of "Boards".| Ассоциативный массив "Досок".
 */
const getAll = async () => inMemoryDb_1.dataBase.boards;
exports.getAll = getAll;
/**
 * This function returns the board by ID.
 * Эта функция возвращает доску по ID.
 * @param {string} boardId - Board ID.| ID доски.
 * @return {objecta | Board} Board object.| Объект доски.
 */
const getById = async (boardId) => inMemoryDb_1.dataBase.boards.filter((el) => el.id === boardId)[0];
exports.getById = getById;
/**
 * This function adds a board to the database.
 * Эта функция добавляет в базу доску.
 * @param {object | Board} board The user's board object.|
 * Объект доски пользователя.
 */
const addBoard = async (board) => {
    inMemoryDb_1.dataBase.boards.push(board);
};
exports.addBoard = addBoard;
/**
 * This function creates a new user board and adds it to the database.
 * Эта функция создания новой доски пользователя и добавления её в базу.
 * @param {object | Board} newBoard The object of the user's new board.| Объект
 * новой доски пользователя.
 * @return {object | Board} Board object.| Объект доски.
 */
const createBoard = async (newBoard) => {
    inMemoryDb_1.dataBase.boards.push(newBoard);
    return getById(newBoard.id);
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
    inMemoryDb_1.dataBase.boards.forEach((item) => {
        if (item.id === boardId) {
            item.title = boardArgs.title;
            item.columns = boardArgs.columns;
            return item;
        }
        return item;
    });
};
exports.updateBoard = updateBoard;
/**
 * This function removes the user's board from the database.
 * Эта функция удаляет доску пользователя из базы данных.
 * @param {string} boardId Board ID.| Id доски.
 */
const deleteBoard = async (boardId) => {
    const newDbTasks = [];
    inMemoryDb_1.dataBase.boards.forEach((item, index) => {
        if (item.id === boardId) {
            inMemoryDb_1.dataBase.boards.splice(index, 1);
        }
    });
    inMemoryDb_1.dataBase.tasks.forEach((item) => {
        if (item.boardId !== boardId) {
            newDbTasks.push(item);
        }
    });
    inMemoryDb_1.dataBase.tasks = newDbTasks;
};
exports.deleteBoard = deleteBoard;
