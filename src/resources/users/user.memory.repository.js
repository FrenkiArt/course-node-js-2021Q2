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

const deleteUser = async (userId) => {
  dataBase.users.forEach((item, index) => {
    /* if (item.id === userId) {
      delete item.name;
      delete item.login;
      delete item.password; 

      return item;
    }
    return item; */

    let indexNumber = null;
    if (item.id === userId) {
      indexNumber = index;
    }
    dataBase.users.splice(indexNumber, 1);
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
