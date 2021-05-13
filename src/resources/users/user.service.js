const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const addNewUser = (newUser) => usersRepo.addNewUser(newUser);
const updateUser = (db) => usersRepo.updateUser(db);

module.exports = { getAll, addNewUser, updateUser };
