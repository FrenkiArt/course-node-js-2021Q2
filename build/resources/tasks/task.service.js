"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserIdFromAllHisTasks = exports.deleteAllTasksByBoardId = exports.createTask = exports.getById = exports.deleteTask = exports.updateTask = exports.addNewTask = exports.getAll = void 0;
const tasksRepo = __importStar(require("./task.memory.repository"));
const getAll = (boardId) => tasksRepo.getAll(boardId);
exports.getAll = getAll;
const deleteAllTasksByBoardId = (boardId) => tasksRepo.deleteAllTasksByBoardId(boardId);
exports.deleteAllTasksByBoardId = deleteAllTasksByBoardId;
const deleteUserIdFromAllHisTasks = (userId) => tasksRepo.deleteUserIdFromAllHisTasks(userId);
exports.deleteUserIdFromAllHisTasks = deleteUserIdFromAllHisTasks;
const getById = (taskId) => tasksRepo.getById(taskId);
exports.getById = getById;
const createTask = (newTask) => tasksRepo.createTask(newTask);
exports.createTask = createTask;
const addNewTask = (newTask) => tasksRepo.addNewTask(newTask);
exports.addNewTask = addNewTask;
const updateTask = (taskArgs, taskId) => tasksRepo.updateTask(taskArgs, taskId);
exports.updateTask = updateTask;
const deleteTask = (taskId) => tasksRepo.deleteTask(taskId);
exports.deleteTask = deleteTask;
