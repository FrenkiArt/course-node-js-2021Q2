import { getConnection, getRepository } from 'typeorm';
// import { dataBase } from '../../common/inMemoryDb';
import Task from '../../entity/task.model';

/**
 * This function returns an array of tasks for a specific board.
 * Эта функция возвращает массив задач конкретной доски.
 * @param {string} boardId - Board ID.| ID доски.
 * @return {array} Associative array of tasks for a specific board.|
 * Ассоциативный массив задач конкретной доски.
 */
const getAll = async (boardId: string) => {
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

  console.log('----- getAll --------- ');
  /* const tasksByBoardId = await getRepository(Task)
    .createQueryBuilder('task')
    .where('task.boardId = :boardId', { boardId })
    .getMany(); */

  const taskRepository = await getRepository(Task);
  const tasksByBoardId = taskRepository.find({
    where: { boardId },
  });

  return tasksByBoardId;
};

/**
 * This function deletes all tasks by the passed board ID.
 * Эта функция удаляет все задачи по переданному ID доски.
 * @param {string} boardId - Board ID.| ID доски.
 */
const deleteAllTasksByBoardId = async (boardId: string) => {
  /* dataBase.tasks = dataBase.tasks.filter(
    (task: Task) => task.boardId !== boardId
  ); */

  console.log('----- deleteAllTasksByBoardId --------- ');
  const taskRepository = getRepository(Task);
  taskRepository
    .createQueryBuilder('task')
    .delete()
    .where('boardId = :boardId', { boardId })
    .execute();
};

/**
 * This function replaces the user Id for tasks with null based
 * on the passed userId.
 * Эта функция заменяет у задач userId на null по переданному userId.
 * By issuing a deletion.
 * Эмитируя удаление.
 * @param {string} userId - User ID.| ID пользователя.
 */
const deleteUserIdFromAllHisTasks = async (userId: string) => {
  /* dataBase.tasks.forEach((task) => {
    if (task.userId === userId) {
      task.userId = null;
    }
  }); */

  console.log('----- deleteUserIdFromAllHisTasks --------- ');
  await getConnection()
    .createQueryBuilder()
    .update(Task)
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

/**
 * This function returns the task by the task ID and the board ID.
 * Эта функция возвращает задачу по ID задачи и ID доски.
 * @param {object} args - The object of the arguments to be passed.|
 * Объект передаваемых аргументов.
 * @param {string} taskId - Task ID.| ID задачи.
 * @param {string} boardId - Board ID.| ID доски.
 * @return {object} The task object.| Объект задачи.
 */
const getById = async (args: { taskId: string; boardId: string }) => {
  /* dataBase.tasks.filter(
    (task) => task.id === args.taskId && task.boardId === args.boardId
  )[0]; */

  console.log('----- getById --------- ');
  /* const taskRepository = await getRepository(Task);
  const constById = taskRepository
    .createQueryBuilder('task')
    .where(`boardId = ${args.boardId}`, {
      boardId: args.boardId,
    })
    .andWhere(`id = ${args.taskId}`, { id: args.taskId })
    .getOne();
  return constById; */

  const taskRepository = await getRepository(Task);
  const taskById = taskRepository.findOne({
    where: { boardId: args.boardId, id: args.taskId },
  });
  /* const taskById = taskRepository
    .createQueryBuilder('task')
    .where('boardId = :boardId', {
      boardId: args.boardId,
    })
    .andWhere('id = :taskId', { id: args.taskId })
    .getOne(); */
  return taskById;
};

/**
 * This function adds a new task to the database.
 * Эта функция добавляет в базу новую задачу.
 * @param {object} newTask The object of the new task.| Объект новой задачи.
 */
const addNewTask = async (newTask: Task) => {
  // dataBase.tasks.push(newTask);

  console.log('----- addNewTask --------- ');
  const taskRepository = await getRepository(Task);
  taskRepository.save(newTask);
};

/**
 * This function creates a new task and adds it to the database.
 * Эта функция создания новой задачи и добавления её в базу.
 * @param {object} newTask The object of the new task.| Объект новой задачи.
 * @return {object} The task object.| Объект задачи.
 */
const createTask = async (newTask: Task) => {
  /* dataBase.tasks.push(newTask);
  return newTask; */

  console.log('----- createTask --------- ');
  const taskRepository = await getRepository(Task);
  const newCreatedTask = taskRepository.create(newTask);
  taskRepository.save(newCreatedTask);
  return newCreatedTask;
};

/**
 * This function updates the user's task data in the database by ID.
 * Эта функция обновляет данные задачи пользователя в базе данных по ID.
 * @param {object} taskArgs The object of the arguments to be passed.|
 * Объект передаваемых аргументов.
 * @param {string} taskId Task ID.| ID задачи.
 */
const updateTask = async (
  taskArgs: {
    title: string;
    order: number;
    description: string;
    userId: string;
    boardId: string;
    columnId: string;
  },
  taskId: string
) => {
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

  console.log('----- updateTask --------- ');
  await getConnection()
    .createQueryBuilder()
    .update(Task)
    .set(taskArgs)
    .where('id = :taskId', { taskId })
    .execute();
};

/**
 * This function removes the user's task from the database by its ID.
 * Эта функция удаляет задачу пользователя из базы данных по её ID.
 * @param {string} taskId Task ID.| ID задачи.
 */
const deleteTask = async (taskId: string) => {
  /* dataBase.tasks.forEach((item: { id: string }, index: number) => {
    if (item.id === taskId) {
      dataBase.tasks.splice(index, 1);
    }
  }); */

  await getConnection()
    .createQueryBuilder()
    .delete()
    .from(Task)
    .where('id = :taskId', { taskId })
    .execute();
};

export {
  getAll,
  addNewTask,
  updateTask,
  deleteTask,
  getById,
  createTask,
  deleteAllTasksByBoardId,
  deleteUserIdFromAllHisTasks,
};
