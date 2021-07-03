"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getById = exports.deleteUser = exports.updateUser = exports.addNewUser = exports.getAll = void 0;
const typeorm_1 = require("typeorm");
// import { dataBase } from '../../common/inMemoryDb';
const user_model_1 = __importDefault(require("../../entity/user.model"));
// const entityManager = getManager();
// you can also get it via getConnection().manager
// const userRepository = getRepository(User);
// you can also get it via getConnection().getRepository()
// or getManager().getRepository()
/**
 * This function returns an array of users.
 * Эта функция возвращает массив пользователей.
 * @return {array} An associative array of users.|
 * Ассоциативный массив пользователей.
 */
const getAll = async () => {
    // [];
    // dataBase.users;
    const userRepository = typeorm_1.getRepository(user_model_1.default);
    return userRepository.find();
};
exports.getAll = getAll;
/**
 * This function returns the user by ID.
 * Эта функция возвращает пользователя по ID.
 * @param {string} userId - User ID.| ID пользователя.
 * @return {object} User object.| Объект пользователя.
 */
const getById = async (userId) => {
    // dataBase.users.filter((user: User) => user.id === userId)[0];
    // const userById = await entityManager.findOne(User, userId);
    const userRepository = typeorm_1.getRepository(user_model_1.default);
    const userById = await userRepository.findOne(userId);
    // if (userById === undefined) return 'userById not found';
    return userById;
};
exports.getById = getById;
/**
 * This function adds a new user to the database.
 * Эта функция добавляет в базу нового пользователя.
 * @param {object} newUser The object of the new user.| Объект
 * нового пользователя.
 */
const addNewUser = async (newUser) => {
    // dataBase.users.push(newUser);
    const userRepository = typeorm_1.getRepository(user_model_1.default);
    userRepository.save(newUser);
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
    // const newUser = new User(reqBody);
    const userRepository = typeorm_1.getRepository(user_model_1.default);
    const newUser = userRepository.create(reqBody);
    // dataBase.users.push(newUser);
    const newSavedUser = userRepository.save(newUser);
    // return newUser;
    return newSavedUser;
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
    /* dataBase.users.forEach((item: User) => {
      if (item.id === userId) {
        item.name = userArgs.name;
        item.login = userArgs.login;
        item.password = userArgs.password;
  
        return item;
      }
      return item;
    }); */
    const userRepository = typeorm_1.getRepository(user_model_1.default);
    const updatedUser = await userRepository.update(userId, userArgs);
    return updatedUser;
};
exports.updateUser = updateUser;
console.log(typeorm_1.getConnection);
/**
 * This function removes the user from the database.
 * Эта функция удаляет пользователя из базы данных.
 * @param {string} userId User ID.| Id пользователя.
 */
const deleteUser = async (userId) => {
    /* dataBase.users.forEach((item: User, index) => {
      if (item.id === userId) {
        dataBase.users.splice(index, 1);
      }
    }); */
    /* const userRepository = getRepository(User);
    await userRepository.delete(userId); */
    await typeorm_1.getConnection()
        .createQueryBuilder()
        .delete()
        .from(user_model_1.default)
        .where(`id = :userId`, { userId })
        .execute();
};
exports.deleteUser = deleteUser;
