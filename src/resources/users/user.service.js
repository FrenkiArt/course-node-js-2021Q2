const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getById = (userId) => usersRepo.getById(userId);
const createUser = (newUser) => usersRepo.createUser(newUser);
const addNewUser = (newUser) => usersRepo.addNewUser(newUser);
const updateUser = (userArgs, userID) => usersRepo.updateUser(userArgs, userID);
const deleteUser = (userID) => usersRepo.deleteUser(userID);

module.exports = {
  getAll,
  addNewUser,
  updateUser,
  deleteUser,
  getById,
  createUser,
};
