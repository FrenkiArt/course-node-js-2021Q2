import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../entity/user.model';
import * as usersService from '../users/user.service';

const findUserById = async (userId: User['id']) => usersService.getById(userId);
const findUserByLogin = async (userLogin: User['login']) =>
  usersService.getByLogin(userLogin);

const validateUser = async (
  userLogin: User['login'],
  userPassword: User['password']
) => {
  const user = await findUserByLogin(userLogin);

  if (!user) {
    throw new Error('User not found by validateUser()');
  }

  const isCorrectPassword = await compare(userPassword, user.password);
  // Здесь, User.password уже захэшированный.

  if (!isCorrectPassword) {
    throw new Error('Wrong password');
  }

  return { user };
};

const generateAuthToken = async (userId: User['id']) => {
  if (!process.env['JWT_SECRET_KEY']) {
    throw new Error('JWT_SECRET_KEY can not be readed');
  }
  const token = jwt.sign({ _id: userId }, process.env['JWT_SECRET_KEY']);
  return token;
};

export { findUserById, validateUser, findUserByLogin, generateAuthToken };
