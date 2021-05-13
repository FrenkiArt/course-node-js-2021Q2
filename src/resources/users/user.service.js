const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const addNewUser = (newUser) => usersRepo.addNewUser(newUser);

module.exports = { getAll, addNewUser };
