const { dataBase } = require('../../common/inMemoryDb.js');

/**
 * Эта функция возвращает массив задач конкретной доски.
 * @param {string} boardId - ID доски.
 * @returns {array} Ассоциативный массив задач конкретной доски.
 */
const getAll = async (boardId) => {
  const tasksByBoardId = dataBase.tasks.filter(
    (task) => task.boardId === boardId
  );

  return tasksByBoardId;
};

/**
 * Эта функция удаляет все задачи по переданному ID доски.
 * @param {string} boardId - ID доски.
 */
const deleteAllTasksByBoardId = async (boardId) => {
  dataBase.tasks = dataBase.tasks.filter((task) => task.boardId !== boardId);
};

/**
 * Эта функция заменяет у задач userId на null по переданному userId.
 * Эмитируя удаление.
 * @param {string} userId - ID пользователя.
 */
const deleteUserIdFromAllHisTasks = async (userId) => {
  dataBase.tasks.forEach((task) => {
    if (task.userId === userId) {
      task.userId = null;
    }
  });
};

/**
 * Эта функция возвращает задачу по ID задачи и ID доски.
 * @param {object} args - Объект передаваемых аргументов.
 * @param {string} taskId - ID задачи.
 * @param {string} boardId - ID доски.
 * @returns {object} Объект задачи.
 */
const getById = async (args) =>
  dataBase.tasks.filter(
    (task) => task.id === args.taskId && task.boardId === args.boardId
  )[0];

/**
 * Эта функция добавляет в базу новую задачу.
 * @param {object} newTask Объект новой задачи.
 */
const addNewTask = async (newTask) => {
  dataBase.tasks.push(newTask);
};

/**
 * Эта функция создания новой задачи и добавления её в базу.
 * @param {object} newTask Объект новой задачи.
 * @returns {object} Объект задачи.
 */
const createTask = async (newTask) => {
  dataBase.tasks.push(newTask);
  return newTask;
};

/**
 * Эта функция обновляет данные задачи пользователя в базе данных по ID.
 * @param {object} taskArgs Объект передаваемых аргументов.
 * @param {string} taskId ID задачи.
 */
const updateTask = async (taskArgs, taskId) => {
  dataBase.tasks.forEach((item) => {
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

/**
 * Эта функция удаляет задачу пользователя из базы данных по её ID.
 * @param {string} taskId ID задачи.
 */
const deleteTask = async (taskId) => {
  let indexNumber = null;

  dataBase.tasks.forEach((item, index) => {
    if (item.id === taskId) {
      indexNumber = index;
    }
  });

  dataBase.tasks.splice(indexNumber, 1);
};

module.exports = {
  getAll,
  addNewTask,
  updateTask,
  deleteTask,
  getById,
  createTask,
  deleteAllTasksByBoardId,
  deleteUserIdFromAllHisTasks,
};
