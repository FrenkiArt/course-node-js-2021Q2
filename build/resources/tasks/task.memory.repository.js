"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserIdFromAllHisTasks = exports.deleteAllTasksByBoardId = exports.createTask = exports.getById = exports.deleteTask = exports.updateTask = exports.addNewTask = exports.getAll = void 0;
const typeorm_1 = require("typeorm");
// import { dataBase } from '../../common/inMemoryDb';
const task_model_1 = __importDefault(require("../../entity/task.model"));
/**
 * This function returns an array of tasks for a specific board.
 * Эта функция возвращает массив задач конкретной доски.
 * @param {string} boardId - Board ID.| ID доски.
 * @return {array} Associative array of tasks for a specific board.|
 * Ассоциативный массив задач конкретной доски.
 */
const getAll = async (boardId) => {
    /* const tasksByBoardId = dataBase.tasks.filter(
      (task: { boardId: string }) => task.boardId === boardId
    );
  
    return tasksByBoardId; */
    /* const taskRepository = getRepository(Task);
    const tasksByBoardId = taskRepository
      .createQueryBuilder('task')
      .where('boardId = :boardId', { boardId })
      .getMany();
    return tasksByBoardId; */
    const taskRepository = await typeorm_1.getRepository(task_model_1.default);
    const tasksByBoardId = taskRepository.find({ where: { boardId } });
    return tasksByBoardId;
};
exports.getAll = getAll;
/**
 * This function deletes all tasks by the passed board ID.
 * Эта функция удаляет все задачи по переданному ID доски.
 * @param {string} boardId - Board ID.| ID доски.
 */
const deleteAllTasksByBoardId = async (boardId) => {
    /* dataBase.tasks = dataBase.tasks.filter(
      (task: Task) => task.boardId !== boardId
    ); */
    const taskRepository = typeorm_1.getRepository(task_model_1.default);
    taskRepository
        .createQueryBuilder('task')
        .delete()
        .where('boardId = :boardId', { boardId })
        .execute();
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
    /* dataBase.tasks.forEach((task) => {
      if (task.userId === userId) {
        task.userId = null;
      }
    }); */
    await typeorm_1.getConnection()
        .createQueryBuilder()
        .update(task_model_1.default)
        .set({ userId: null })
        .where('userId = :userId', { userId })
        .execute();
    /* await getConnection()
      .createQueryBuilder()
      .update(Task)
      .set({ userId: null })
      .where(`userId = ${userId}`, { userId })
      .execute(); */
};
exports.deleteUserIdFromAllHisTasks = deleteUserIdFromAllHisTasks;
/**
 * This function returns the task by the task ID and the board ID.
 * Эта функция возвращает задачу по ID задачи и ID доски.
 * @param {object} args - The object of the arguments to be passed.|
 * Объект передаваемых аргументов.
 * @param {string} taskId - Task ID.| ID задачи.
 * @param {string} boardId - Board ID.| ID доски.
 * @return {object} The task object.| Объект задачи.
 */
const getById = async (args) => {
    /* dataBase.tasks.filter(
      (task) => task.id === args.taskId && task.boardId === args.boardId
    )[0]; */
    const taskRepository = await typeorm_1.getRepository(task_model_1.default);
    const constById = taskRepository
        .createQueryBuilder('task')
        .where(`boardId = ${args.boardId}`, {
        boardId: args.boardId,
    })
        .andWhere(`id = ${args.taskId}`, { id: args.taskId })
        .getOne();
    return constById;
};
exports.getById = getById;
/**
 * This function adds a new task to the database.
 * Эта функция добавляет в базу новую задачу.
 * @param {object} newTask The object of the new task.| Объект новой задачи.
 */
const addNewTask = async (newTask) => {
    // dataBase.tasks.push(newTask);
    const taskRepository = await typeorm_1.getRepository(task_model_1.default);
    taskRepository.save(newTask);
};
exports.addNewTask = addNewTask;
/**
 * This function creates a new task and adds it to the database.
 * Эта функция создания новой задачи и добавления её в базу.
 * @param {object} newTask The object of the new task.| Объект новой задачи.
 * @return {object} The task object.| Объект задачи.
 */
const createTask = async (newTask) => {
    /* dataBase.tasks.push(newTask);
    return newTask; */
    const taskRepository = await typeorm_1.getRepository(task_model_1.default);
    const newCreatedTask = taskRepository.create(newTask);
    const newSavedTask = taskRepository.save(newCreatedTask);
    return newSavedTask;
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
    /* dataBase.tasks.forEach(
      (item: {
        id: string;
        title: string;
        order: number;
        description: string;
        userId: string | null;
        boardId: string;
        columnId: string;
      }) => {
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
      }
    ); */
    await typeorm_1.getConnection()
        .createQueryBuilder()
        .update(task_model_1.default)
        .set(taskArgs)
        .where('id = :taskId', { taskId })
        .execute();
};
exports.updateTask = updateTask;
/**
 * This function removes the user's task from the database by its ID.
 * Эта функция удаляет задачу пользователя из базы данных по её ID.
 * @param {string} taskId Task ID.| ID задачи.
 */
const deleteTask = async (taskId) => {
    /* dataBase.tasks.forEach((item: { id: string }, index: number) => {
      if (item.id === taskId) {
        dataBase.tasks.splice(index, 1);
      }
    }); */
    await typeorm_1.getConnection()
        .createQueryBuilder()
        .delete()
        .from(task_model_1.default)
        .where('id = :taskId', { taskId })
        .execute();
};
exports.deleteTask = deleteTask;
