import * as tasksRepo from './task.memory.repository';
import Task from './task.model';

const getAll = (boardId: string | undefined) => tasksRepo.getAll(boardId);
const deleteAllTasksByBoardId = (boardId: string) =>
  tasksRepo.deleteAllTasksByBoardId(boardId);
const deleteUserIdFromAllHisTasks = (userId: string | undefined) =>
  tasksRepo.deleteUserIdFromAllHisTasks(userId);
const getById = (taskId: {
  boardId: string | undefined;
  taskId: string | undefined;
}) => tasksRepo.getById(taskId);
const createTask = (newTask: Task) => tasksRepo.createTask(newTask);
const addNewTask = (newTask: Task) => tasksRepo.addNewTask(newTask);
const updateTask = (
  taskArgs: {
    title: string;
    order: number;
    description: string;
    userId: string | null;
    boardId: string | undefined;
    columnId: string;
  },
  taskId: string | undefined
) => tasksRepo.updateTask(taskArgs, taskId);
const deleteTask = (taskId: string | undefined) => tasksRepo.deleteTask(taskId);

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
