const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getById = (userId) => usersRepo.getById(userId);
const createUser = (newUser) => usersRepo.createUser(newUser);
const addNewUser = (newUser) => usersRepo.addNewUser(newUser);
const updateUser = (userArgs, userId) => usersRepo.updateUser(userArgs, userId);
const deleteUser = (userId) => usersRepo.deleteUser(userId);

module.exports = {
  getAll,
  addNewUser,
  updateUser,
  deleteUser,
  getById,
  createUser,
};
