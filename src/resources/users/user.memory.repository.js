import dataBase from '../../common/inMemoryDb.ts';

/**
 * This function returns an array of users.
 * Эта функция возвращает массив пользователей.
 * @return {array} An associative array of users.|
 * Ассоциативный массив пользователей.
 */
const getAll = async () =>
  // [];
  dataBase.users;

/**
 * This function returns the user by ID.
 * Эта функция возвращает пользователя по ID.
 * @param {string} userId - User ID.| ID пользователя.
 * @return {object} User object.| Объект пользователя.
 */
const getById = async (userId) =>
  dataBase.users.filter((el) => el.id === userId)[0];

/**
 * This function adds a new user to the database.
 * Эта функция добавляет в базу нового пользователя.
 * @param {object} newUser The object of the new user.| Объект
 * нового пользователя.
 */
const addNewUser = async (newUser) => {
  dataBase.users.push(newUser);
};

/**
 * This function creates a new user and adds it to the database.
 * Эта функция создания нового пользователя и добавления его в базу.
 * @param {object} newUser The object of the new user.| Объект
 * нового пользователя.
 * @return {object} User object. Объект пользователя.
 */
const createUser = async (newUser) => {
  dataBase.users.push(newUser);
  return getById(newUser.id);
};

/**
 * This function updates the user's data in the database.
 * Эта функция обновляет данные пользователя в базе данных.
 * @param {object} userArgs The object of the arguments to be passed.|
 * Объект передаваемых аргументов.
 * @param {string} userId User ID.| Id пользователя.
 */
const updateUser = async (userArgs, userId) => {
  dataBase.users.forEach((item) => {
    if (item.id === userId) {
      item.name = userArgs.name;
      item.login = userArgs.login;
      item.password = userArgs.password;

      return item;
    }
    return item;
  });
};

/**
 * This function removes the user from the database.
 * Эта функция удаляет пользователя из базы данных.
 * @param {string} userId User ID.| Id пользователя.
 */
const deleteUser = async (userId) => {
  let indexNumber = null;

  dataBase.users.forEach((item, index) => {
    if (item.id === userId) {
      indexNumber = index;
    }
  });

  dataBase.users.splice(indexNumber, 1);
};

export default {
  getAll,
  addNewUser,
  updateUser,
  deleteUser,
  getById,
  createUser,
};
