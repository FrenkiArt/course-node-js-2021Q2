"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getById = exports.deleteUser = exports.updateUser = exports.addNewUser = exports.getAll = void 0;
const inMemoryDb_1 = require("../../common/inMemoryDb");
const user_model_1 = __importDefault(require("./user.model"));
/**
 * This function returns an array of users.
 * Эта функция возвращает массив пользователей.
 * @return {array} An associative array of users.|
 * Ассоциативный массив пользователей.
 */
const getAll = async () => 
// [];
inMemoryDb_1.dataBase.users;
exports.getAll = getAll;
/**
 * This function returns the user by ID.
 * Эта функция возвращает пользователя по ID.
 * @param {string} userId - User ID.| ID пользователя.
 * @return {object} User object.| Объект пользователя.
 */
const getById = async (userId) => inMemoryDb_1.dataBase.users.filter((user) => user.id === userId)[0];
exports.getById = getById;
/**
 * This function adds a new user to the database.
 * Эта функция добавляет в базу нового пользователя.
 * @param {object} newUser The object of the new user.| Объект
 * нового пользователя.
 */
const addNewUser = async (newUser) => {
    inMemoryDb_1.dataBase.users.push(newUser);
};
exports.addNewUser = addNewUser;
/**
 * This function creates a new user and adds it to the database.
 * Эта функция создания нового пользователя и добавления его в базу.
 * @param {object} reqBody - объект для нового пользователя
 * @param {object} newUser The object of the new user.| Объект
 * нового пользователя.
 * @return {object} User object. Объект пользователя.
 */
const createUser = async (reqBody) => {
    const newUser = new user_model_1.default(reqBody);
    inMemoryDb_1.dataBase.users.push(newUser);
    return newUser;
};
exports.createUser = createUser;
/**
 * This function updates the user's data in the database.
 * Эта функция обновляет данные пользователя в базе данных.
 * @param {object} userArgs The object of the arguments to be passed.|
 * Объект передаваемых аргументов.
 * @param {string} userId User ID.| Id пользователя.
 */
const updateUser = async (userArgs, userId) => {
    inMemoryDb_1.dataBase.users.forEach((item) => {
        if (item.id === userId) {
            item.name = userArgs.name;
            item.login = userArgs.login;
            item.password = userArgs.password;
            return item;
        }
        return item;
    });
};
exports.updateUser = updateUser;
/**
 * This function removes the user from the database.
 * Эта функция удаляет пользователя из базы данных.
 * @param {string} userId User ID.| Id пользователя.
 */
const deleteUser = async (userId) => {
    inMemoryDb_1.dataBase.users.forEach((item, index) => {
        if (item.id === userId) {
            inMemoryDb_1.dataBase.users.splice(index, 1);
        }
    });
};
exports.deleteUser = deleteUser;
