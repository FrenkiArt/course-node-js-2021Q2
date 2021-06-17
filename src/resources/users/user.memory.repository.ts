import { /* getManager, */ getRepository } from 'typeorm';
// import { dataBase } from '../../common/inMemoryDb';
import User from '../../entity/user.model';

// const entityManager = getManager();
// you can also get it via getConnection().manager

const userRepository = getRepository(User);
// you can also get it via getConnection().getRepository()
// or getManager().getRepository()

/**
 * This function returns an array of users.
 * Эта функция возвращает массив пользователей.
 * @return {array} An associative array of users.|
 * Ассоциативный массив пользователей.
 */
const getAll = async () =>
  // [];
  // dataBase.users;
  userRepository.find({ where: {} });

/**
 * This function returns the user by ID.
 * Эта функция возвращает пользователя по ID.
 * @param {string} userId - User ID.| ID пользователя.
 * @return {object} User object.| Объект пользователя.
 */
const getById = async (userId: string) => {
  // dataBase.users.filter((user: User) => user.id === userId)[0];
  // const userById = await entityManager.findOne(User, userId);

  const userById = await userRepository.findOne(userId);
  if (userById === undefined) return 'userById not found';
  return userById;
};

/**
 * This function adds a new user to the database.
 * Эта функция добавляет в базу нового пользователя.
 * @param {object} newUser The object of the new user.| Объект
 * нового пользователя.
 */
const addNewUser = async (newUser: User) => {
  // dataBase.users.push(newUser);
  userRepository.save(newUser);
};

/**
 * This function creates a new user and adds it to the database.
 * Эта функция создания нового пользователя и добавления его в базу.
 * @param {object} reqBody - объект для нового пользователя
 * @param {object} newUser The object of the new user.| Объект
 * нового пользователя.
 * @return {object} User object. Объект пользователя.
 */

const createUser = async (reqBody: object) => {
  // const newUser = new User(reqBody);
  const newUser = userRepository.create(reqBody);
  // dataBase.users.push(newUser);
  const newSavedUser = userRepository.save(newUser);
  // return newUser;
  return newSavedUser;
};

/**
 * This function updates the user's data in the database.
 * Эта функция обновляет данные пользователя в базе данных.
 * @param {object} userArgs The object of the arguments to be passed.|
 * Объект передаваемых аргументов.
 * @param {string} userId User ID.| Id пользователя.
 */
const updateUser = async (
  userArgs: { name: string; login: string; password: string },
  userId: string
) => {
  /* dataBase.users.forEach((item: User) => {
    if (item.id === userId) {
      item.name = userArgs.name;
      item.login = userArgs.login;
      item.password = userArgs.password;

      return item;
    }
    return item;
  }); */

  await userRepository.update(userId, userArgs);
};

/**
 * This function removes the user from the database.
 * Эта функция удаляет пользователя из базы данных.
 * @param {string} userId User ID.| Id пользователя.
 */
const deleteUser = async (userId: string) => {
  /* dataBase.users.forEach((item: User, index) => {
    if (item.id === userId) {
      dataBase.users.splice(index, 1);
    }
  }); */

  // await userRepository.delete(userId);
  await userRepository.softDelete(userId);
};

export { getAll, addNewUser, updateUser, deleteUser, getById, createUser };
