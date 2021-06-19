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
const user_model_1 = __importDefault(require("../../entity/user.model"));
const usersService = __importStar(require("./user.service"));
const tasksService = __importStar(require("../tasks/task.service"));
const router = express.Router();
router.route('/').get(async (_req, res) => {
    const users = await usersService.getAll();
    // map user fields to exclude secret fields like "password"
    res.json(users.map(user_model_1.default.toResponse));
});
router.route('/:userId').get(async (req, res) => {
    const userById = await usersService.getById(String(req.params['userId']));
    if (userById) {
        res.status(200).json(user_model_1.default.toResponse(userById));
    }
    else {
        res.status(404).json({
            id: req.params['userId'],
            error: `Пользователя с Id ${req.params['userId']} не найдено.`,
        });
    }
});
router.route('/').post(async (req, res) => {
    const user = await usersService.createUser(req.body);
    res.status(201).json(user_model_1.default.toResponse(user));
});
router.route('/:userId').put(async (req, res) => {
    const users = await usersService.getAll();
    let userIsBe = null;
    users.forEach((item) => {
        if (item.id === req.params['userId']) {
            userIsBe = true;
        }
    });
    if (userIsBe) {
        usersService.updateUser(req.body, String(req.params['userId']));
        res.status(200).json(req.body);
    }
    else {
        res
            .status(404)
            .json({ error: `Пользователя с Id ${req.params['userId']} не найдено.` });
    }
});
router.route('/:userId').delete(async (req, res) => {
    const users = await usersService.getAll();
    let userIsBe = null;
    users.forEach((item) => {
        if (item.id === req.params['userId']) {
            userIsBe = true;
        }
    });
    if (userIsBe) {
        tasksService.deleteUserIdFromAllHisTasks(String(req.params['userId']));
        usersService.deleteUser(String(req.params['userId']));
        res.status(204).json({ message: 'Объект удалён' });
    }
    else {
        res
            .status(404)
            .json({ error: `Пользователя с Id ${req.params['userId']} не найдено.` });
    }
});
exports.default = router;
