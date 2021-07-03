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
 * Task class | Класс задачи
 * @class
 */
let Task = class Task {
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
};
__decorate([
    typeorm_1.PrimaryColumn('uuid'),
    __metadata("design:type", String)
], Task.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Task.prototype, "order", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ type: 'text', nullable: true }),
    __metadata("design:type", Object)
], Task.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column({ type: 'text' }),
    __metadata("design:type", Object)
], Task.prototype, "boardId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Task.prototype, "columnId", void 0);
Task = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [Object])
], Task);
exports.default = Task;
