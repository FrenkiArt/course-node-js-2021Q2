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
 * User Class | Класс Пользователя
 * @class
 */
let User = class User {
    /**
     * This class creates an instance of the user.
     * Этот класс создаёт экземпляр пользователя.
     * @param {string | null} id - User ID.| ID пользователя.
     * @param {string} name - The user name.| Имя пользователя.
     * @param {string} login - The user's username.| Логин пользователя.
     * @param {string} password - User Password.| Пароль пользователя.
     */
    constructor({ id = uuid.v4(), name = 'USER', login = 'user', password = 'P@55w0rd', } = {}) {
        this.id = id;
        this.name = name;
        this.login = login;
        this.password = password;
    }
    /**
     * This function returns the user object cleared of the password.
     * Эта функция возвращает объект пользователя очищенный от пароля.
     * @param {object | User} user - User object.| Объект пользователя.
     * @return {object} - Password-cleared user object | Очищенный
     * от пароля объект пользователя
     */
    static toResponse(user) {
        const { id, name, login } = user;
        return { id, name, login };
    }
    /**
     * This function returns the ID of the passed user.
     * Эта функция возвращает ID переданного пользователя.
     * @param {object | User} user - User object.| Объект пользователя.
     * @return {string} - User ID.| ID пользователя.
     */
    static getId(user) {
        const { id } = user;
        return { id };
    }
};
__decorate([
    typeorm_1.PrimaryColumn('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "login", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
User = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [Object])
], User);
exports.default = User;
