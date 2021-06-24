import * as usersRepo from './user.memory.repository';
import User from '../../entity/user.model';

const getAll = () => usersRepo.getAll();
const getById = (userId: string) => usersRepo.getById(userId);
const getByLogin = (login: string) => usersRepo.getById(login);
const createUser = (newUser: User) => usersRepo.createUser(newUser);
const addNewUser = (newUser: User) => usersRepo.addNewUser(newUser);
const updateUser = (userArgs: User, userId: string) =>
  usersRepo.updateUser(userArgs, userId);
const deleteUser = (userId: string) => usersRepo.deleteUser(userId);

export {
  getAll,
  addNewUser,
  updateUser,
  deleteUser,
  getById,
  createUser,
  getByLogin,
};
