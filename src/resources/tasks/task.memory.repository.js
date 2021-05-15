const { dataBase } = require('../../common/inMemoryDb.js');

const getAll = async (boardId) => {
  const tasksByBoardId = dataBase.tasks.filter(
    (task) => task.boardId === boardId
  );

  return tasksByBoardId;
};

const deleteAllTasksByBoardId = async (boardId) => {
  dataBase.tasks = dataBase.tasks.filter((task) => task.boardId !== boardId);
};

const deleteUserIdFromAllHisTasks = async (userId) => {
  dataBase.tasks.forEach((task) => {
    if (task.userId === userId) {
      task.userId = null;
    }
  });
};

const getById = async (args) =>
  dataBase.tasks.filter(
    (task) => task.id === args.taskId && task.boardId === args.boardId
  )[0];

const addNewTask = async (newTask) => {
  dataBase.tasks.push(newTask);
};

const createTask = async (newTask) => {
  dataBase.tasks.push(newTask);
  return newTask;
};

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
