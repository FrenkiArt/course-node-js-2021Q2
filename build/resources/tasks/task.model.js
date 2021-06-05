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
const uuid = __importStar(require("uuid"));
/**
 * Task class | Класс задачи
 * @class
 */
class Task {
    /**
     * This class creates an instance of the user's task.
     * Этот класс создаёт экземпляр задачи пользователя.
     * @param {string} id - Task ID.| ID задачи.
     * @param {string} title - The title of the task.| Заголовок задачи.
     * @param {number} order - The sequential number of the task.| Порядковый
     * номер задачи.
     * @param {string} description - Task description.| Описание задачи.
     * @param {string | null} userId - User ID.| ID пользователя.
     * @param {string} boardId - Board ID | ID доски.
     * @param {string} columnId - Column ID. ID колонки.
     */
    constructor({ id = uuid.v4(), title = 'title', order = 0, description = 'description', userId = 'string', boardId = 'string', columnId = 'string', } = {}) {
        this.id = id;
        this.title = title;
        this.order = order;
        this.description = description;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId = columnId;
    }
}
exports.default = Task;
