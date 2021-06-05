"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserIdFromAllHisTasks = exports.deleteAllTasksByBoardId = exports.createTask = exports.getById = exports.deleteTask = exports.updateTask = exports.addNewTask = exports.getAll = void 0;
const inMemoryDb_1 = require("../../common/inMemoryDb");
/**
 * This function returns an array of tasks for a specific board.
 * Эта функция возвращает массив задач конкретной доски.
 * @param {string | undefined} boardId - Board ID.| ID доски.
 * @return {array} Associative array of tasks for a specific board.|
 * Ассоциативный массив задач конкретной доски.
 */
const getAll = async (boardId) => {
    const tasksByBoardId = inMemoryDb_1.dataBase.tasks.filter((task) => task.boardId === boardId);
    return tasksByBoardId;
};
exports.getAll = getAll;
/**
 * This function deletes all tasks by the passed board ID.
 * Эта функция удаляет все задачи по переданному ID доски.
 * @param {string | undefined} boardId - Board ID.| ID доски.
 */
const deleteAllTasksByBoardId = async (boardId) => {
    inMemoryDb_1.dataBase.tasks = inMemoryDb_1.dataBase.tasks.filter((task) => task.boardId !== boardId);
};
exports.deleteAllTasksByBoardId = deleteAllTasksByBoardId;
/**
 * This function replaces the user Id for tasks with null based
 * on the passed userId.
 * Эта функция заменяет у задач userId на null по переданному userId.
 * By issuing a deletion.
 * Эмитируя удаление.
 * @param {string} userId - User ID.| ID пользователя.
 */
const deleteUserIdFromAllHisTasks = async (userId) => {
    inMemoryDb_1.dataBase.tasks.forEach((task) => {
        if (task.userId === userId) {
            task.userId = null;
        }
    });
};
exports.deleteUserIdFromAllHisTasks = deleteUserIdFromAllHisTasks;
/**
 * This function returns the task by the task ID and the board ID.
 * Эта функция возвращает задачу по ID задачи и ID доски.
 * @param {object} args - The object of the arguments to be passed.|
 * Объект передаваемых аргументов.
 * @param {string | undefined} taskId - Task ID.| ID задачи.
 * @param {string | undefined} boardId - Board ID.| ID доски.
 * @return {object} The task object.| Объект задачи.
 */
const getById = async (args) => inMemoryDb_1.dataBase.tasks.filter((task) => task.id === args.taskId && task.boardId === args.boardId)[0];
exports.getById = getById;
/**
 * This function adds a new task to the database.
 * Эта функция добавляет в базу новую задачу.
 * @param {object} newTask The object of the new task.| Объект новой задачи.
 */
const addNewTask = async (newTask) => {
    inMemoryDb_1.dataBase.tasks.push(newTask);
};
exports.addNewTask = addNewTask;
/**
 * This function creates a new task and adds it to the database.
 * Эта функция создания новой задачи и добавления её в базу.
 * @param {object} newTask The object of the new task.| Объект новой задачи.
 * @return {object} The task object.| Объект задачи.
 */
const createTask = async (newTask) => {
    inMemoryDb_1.dataBase.tasks.push(newTask);
    return newTask;
};
exports.createTask = createTask;
/**
 * This function updates the user's task data in the database by ID.
 * Эта функция обновляет данные задачи пользователя в базе данных по ID.
 * @param {object} taskArgs The object of the arguments to be passed.|
 * Объект передаваемых аргументов.
 * @param {string} taskId Task ID.| ID задачи.
 */
const updateTask = async (taskArgs, taskId) => {
    inMemoryDb_1.dataBase.tasks.forEach((item) => {
        if (item.id === taskId) {
            item.title = taskArgs.title;
            item.order = taskArgs.order;
            item.description = taskArgs.description;
            item.userId = taskArgs.userId;
            item.boardId = taskArgs.boardId;
            item.columnId = taskArgs.columnId;
            return item;
        }
        return item;
    });
};
exports.updateTask = updateTask;
/**
 * This function removes the user's task from the database by its ID.
 * Эта функция удаляет задачу пользователя из базы данных по её ID.
 * @param {string | undefined} taskId Task ID.| ID задачи.
 */
const deleteTask = async (taskId) => {
    inMemoryDb_1.dataBase.tasks.forEach((item, index) => {
        if (item.id === taskId) {
            inMemoryDb_1.dataBase.tasks.splice(index, 1);
        }
    });
};
exports.deleteTask = deleteTask;
