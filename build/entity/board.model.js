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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = __importStar(require("uuid"));
const typeorm_1 = require("typeorm");
/**
 * Board Class | Класс Доски
 * @class
 */
let Board = class Board {
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
};
__decorate([
    typeorm_1.PrimaryColumn('uuid'),
    __metadata("design:type", String)
], Board.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Board.prototype, "columnsCounter", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Board.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ type: 'text', nullable: true }),
    __metadata("design:type", Object)
], Board.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column('simple-array'),
    __metadata("design:type", Array)
], Board.prototype, "columns", void 0);
Board = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [Object])
], Board);
exports.default = Board;
