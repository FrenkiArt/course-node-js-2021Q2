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
const board_model_1 = __importDefault(require("./board.model"));
const boardsService = __importStar(require("./board.service"));
const tasksService = __importStar(require("../tasks/task.service"));
const router = express.Router();
router.route('/').get(async (_req, res) => {
    const boards = await boardsService.getAll();
    res.status(200).json(boards);
});
router.route('/:boardId').get(async (req, res) => {
    const boardById = await boardsService.getById(String(req.params['boardId']));
    if (boardById) {
        res.status(200).json(boardById);
    }
    else {
        res.status(404).json({
            id: req.params['boardId'],
            error: `Доски с Id ${req.params['boardId']} не найдено.`,
        });
    }
});
router.route('/').post(async (req, res) => {
    const board = await boardsService.createBoard(new board_model_1.default(req.body));
    res.status(201).json(board);
});
router.route('/:boardId').put(async (req, res) => {
    const boards = await boardsService.getAll();
    let boardIsBe = null;
    boards.forEach((item) => {
        if (item.id === req.params['boardId']) {
            boardIsBe = true;
        }
    });
    if (boardIsBe) {
        boardsService.updateBoard(req.body, String(req.params['boardId']));
        res.status(200).json(req.body);
    }
    else {
        res
            .status(404)
            .json({ error: `Доски с Id ${req.params['boardId']} не найдено.` });
    }
});
router.route('/:boardId').delete(async (req, res) => {
    const boards = await boardsService.getAll();
    let boardIsBe = null;
    boards.forEach((item) => {
        if (item.id === req.params['boardId']) {
            boardIsBe = true;
        }
    });
    if (boardIsBe) {
        boardsService.deleteBoard(String(req.params['boardId']));
        tasksService.deleteAllTasksByBoardId(String(req.params['boardId']));
        res.status(204).json({ message: 'Объект удалён' });
    }
    else {
        res
            .status(404)
            .json({ error: `Доски с Id ${req.params['userId']} не найдено.` });
    }
});
exports.default = router;
