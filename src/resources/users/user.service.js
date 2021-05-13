const usersRepo = require('./user.memory.repository');

const getAll = (dataBase) => usersRepo.getAll(dataBase);

module.exports = { getAll };
