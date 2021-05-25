import * as usersRepo from './user.memory.repository';
import User from './user.model';

const getAll = () => usersRepo.getAll();
const getById = (userId: string) => usersRepo.getById(userId);
const createUser = (newUser: User) => usersRepo.createUser(newUser);
const addNewUser = (newUser: User) => usersRepo.addNewUser(newUser);
const updateUser = (userArgs: object, userId: string) =>
  usersRepo.updateUser(userArgs, userId);
const deleteUser = (userId: string) => usersRepo.deleteUser(userId);

export { getAll, addNewUser, updateUser, deleteUser, getById, createUser };
