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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const task_model_1 = __importDefault(require("./task.model"));
const tasksService = __importStar(require("./task.service"));
const router = express.Router({ mergeParams: true });
router.route('/').get(async (req, res) => {
    const tasks = await tasksService.getAll(String(req.params['boardId']));
    if (tasks.length > 0) {
        res.status(200).json(tasks);
    }
    else {
        res.status(404).json({
            boardId: req.params['boardId'],
            error: `Задач с boardId ${req.params['boardId']} не найдено`,
        });
    }
});
router.route('/:taskId').get(async (req, res) => {
    const taskById = await tasksService.getById({
        boardId: String(req.params['boardId']),
        taskId: String(req.params['taskId']),
    });
    if (taskById) {
        res.status(200).json(taskById);
    }
    else {
        res.status(404).json({
            id: req.params['taskId'],
            error: `Такой задачи с Id ${req.params['taskId']} не найдено.`,
        });
    }
});
router.route('/').post(async (req, res) => {
    if (req.body.boardId === null) {
        req.body.boardId = req.params['boardId'];
    }
    const task = await tasksService.createTask(new task_model_1.default(req.body));
    res.status(201).json(task);
});
router.route('/:taskId').put(async (req, res) => {
    const tasks = await tasksService.getAll(String(req.params['boardId']));
    let taskIsBe = null;
    tasks.forEach((item) => {
        if (item.id === req.params['taskId']) {
            taskIsBe = true;
        }
    });
    if (taskIsBe) {
        tasksService.updateTask(req.body, req.params['taskId']);
        res.status(200).json(req.body);
    }
    else {
        res
            .status(404)
            .json({ error: `Задачи с Id ${req.params['taskId']} не найдено.` });
    }
});
router.route('/:taskId').delete(async (req, res) => {
    const tasks = await tasksService.getAll(String(req.params['boardId']));
    let taskIsBe = null;
    tasks.forEach((item) => {
        if (item.id === req.params['taskId']) {
            taskIsBe = true;
        }
    });
    if (taskIsBe) {
        tasksService.deleteTask(req.params['taskId']);
        res.status(204).json({ message: 'Объект удалён' });
    }
    else {
        res
            .status(404)
            .json({ error: `Задачи с Id ${req.params['taskId']} не найдено.` });
    }
});
exports.default = router;
