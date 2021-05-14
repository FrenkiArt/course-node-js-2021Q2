/* eslint-disable no-param-reassign */
const { dataBase } = require('../../common/inMemoryDb.js');

const getAll = async () =>
  // [];
  dataBase.users;

const getById = async (userId) =>
  dataBase.users.filter((el) => el.id === userId)[0];

const addNewUser = async (newUser) => {
  dataBase.users.push(newUser);
};

const createUser = async (newUser) => {
  dataBase.users.push(newUser);
  return getById(newUser.id);
};

const updateUser = async (userArgs, userID) => {
  dataBase.users.forEach((item) => {
    if (item.id === userID) {
      item.name = userArgs.name;
      item.login = userArgs.login;
      item.password = userArgs.password;

      return item;
    }
    return item;
  });
};

const deleteUser = async (userID) => {
  dataBase.users.forEach((item) => {
    if (item.id === userID) {
      delete item.name;
      delete item.login;
      delete item.password;

      return item;
    }
    return item;
  });
};

module.exports = {
  getAll,
  addNewUser,
  updateUser,
  deleteUser,
  getById,
  createUser,
};
