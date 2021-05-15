const { dataBase } = require('../../common/inMemoryDb.js');

/**
 * Эта функция возвращает массив пользователей.
 * @returns {array} Ассоциативный массив пользователей.
 */
const getAll = async () =>
  // [];
  dataBase.users;

/**
 * Эта функция возвращает пользователя по ID.
 * @param {string} userId - ID пользователя.
 * @returns {object} Объект пользователя.
 */
const getById = async (userId) =>
  dataBase.users.filter((el) => el.id === userId)[0];

/**
 * Эта функция добавляет в базу нового пользователя.
 * @param {object} newUser Объект нового пользователя.
 */
const addNewUser = async (newUser) => {
  dataBase.users.push(newUser);
};

/**
 * Эта функция создания нового пользователя и добавления его в базу.
 * @param {object} newUser Объект нового пользователя.
 * @returns {object} Объект пользователя.
 */
const createUser = async (newUser) => {
  dataBase.users.push(newUser);
  return getById(newUser.id);
};

/**
 * Эта функция обновляет данные пользователя в базе данных.
 * @param {object} userArgs Объект передаваемых аргументов.
 * @param {string} userId Id пользователя.
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
 * Эта функция удаляет пользователя из базы данных.
 * @param {string} userId Id пользователя.
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

module.exports = {
  getAll,
  addNewUser,
  updateUser,
  deleteUser,
  getById,
  createUser,
};
