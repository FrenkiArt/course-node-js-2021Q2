import * as usersRepo from './user.memory.repository';
const getAll = () => usersRepo.getAll();
const getById = (userId) => usersRepo.getById(userId);
const createUser = (newUser) => usersRepo.createUser(newUser);
const addNewUser = (newUser) => usersRepo.addNewUser(newUser);
const updateUser = (userArgs, userId) => usersRepo.updateUser(userArgs, userId);
const deleteUser = (userId) => usersRepo.deleteUser(userId);
export { getAll, addNewUser, updateUser, deleteUser, getById, createUser };
