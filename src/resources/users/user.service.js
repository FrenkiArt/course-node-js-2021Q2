const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const addNewUser = (newUser) => usersRepo.addNewUser(newUser);
const updateUser = (userArgs, userID) => usersRepo.updateUser(userArgs, userID);
const deleteUser = (userID) => usersRepo.deleteUser(userID);

module.exports = { getAll, addNewUser, updateUser, deleteUser };
