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
 * Board Class | Класс Доски
 * @class
 */
class Board {
    /**
     * This class creates an instance of the user's whiteboard.
     * Этот класс создаёт экземпляр доски пользователя.
     * @param {string} id - ID of the user's board.| ID доски пользователя.
     * @param { number} columnsCounter - Column counter.| Счётчик колонок.
     * @param {string} title - The title of the board.| Заголовок доски.
     * @param {string} userId - User ID.| ID пользователя.
     * @param {string} columns - Associative array of columns.| Ассоциативный
     * массив колонок.
     */
    constructor({ id = uuid.v4(), columnsCounter = 0, title = 'Board title', userId = 'userId', columns = [
        {
            id: uuid.v4(),
            title: 'string',
            order: 0,
        },
        {
            id: uuid.v4(),
            title: 'string',
            order: 0,
        },
        {
            id: uuid.v4(),
            title: 'string',
            order: 0,
        },
    ], } = {}) {
        this.id = id;
        this.columnsCounter = columnsCounter;
        this.title = title;
        this.userId = userId;
        this.columns = columns.map((item) => {
            if (!item.id) {
                item.id = uuid.v4();
            }
            item.order = ++this.columnsCounter;
            return item;
        });
    }
}
exports.default = Board;
