import { getConnection, getRepository } from 'typeorm';
// import { dataBase } from '../../common/inMemoryDb';
import User from '../../entity/user.model';

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
  const userRepository = getRepository(User);

  return userRepository.find();
};

/**
 * This function returns the user by ID.
 * Эта функция возвращает пользователя по ID.
 * @param {string} userId - User ID.| ID пользователя.
 * @return {object} User object.| Объект пользователя.
 */
const getById = async (userId: string) => {
  const userRepository = getRepository(User);
  const userById = await userRepository.findOne(userId);

  return userById;
};

/**
 * This function returns the user by login.
 * Эта функция возвращает пользователя по login.
 * @param {string} login - User login.| login пользователя.
 * @return {object} User object.| Объект пользователя.
 */
const getByLogin = async (login: string) => {
  const userRepository = getRepository(User);
  const userByLogin = await userRepository.findOne(login);

  return userByLogin;
};

/**
 * This function adds a new user to the database.
 * Эта функция добавляет в базу нового пользователя.
 * @param {object} newUser The object of the new user.| Объект
 * нового пользователя.
 */
const addNewUser = async (newUser: User) => {
  // dataBase.users.push(newUser);
  const userRepository = getRepository(User);
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
  const userRepository = getRepository(User);
  const newUser = userRepository.create(reqBody);

  const newSavedUser = userRepository.save(newUser);

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
  const updatedUser = await getConnection()
    .createQueryBuilder()
    .update(User)
    .set(userArgs)
    .where('id = :userId', { userId })
    .execute();
  return updatedUser;
};

/**
 * This function removes the user from the database.
 * Эта функция удаляет пользователя из базы данных.
 * @param {string} userId User ID.| Id пользователя.
 */
const deleteUser = async (userId: string) => {
  await getConnection()
    .createQueryBuilder()
    .delete()
    .from(User)
    .where(`id = :userId`, { userId })
    .execute();
};

export {
  getAll,
  addNewUser,
  updateUser,
  deleteUser,
  getById,
  createUser,
  getByLogin,
};
