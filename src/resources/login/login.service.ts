import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as usersService from '../users/user.service';
import User from '../../entity/user.model';
import config from '../../common/config';

const findUserById = async (userId: User['id']) => usersService.getById(userId);

const findUserByLogin = async (userLogin: User['login']) => {
  console.log('------ findUserByLogin() ----------');
  const getByLogin = await usersService.getByLogin(userLogin);
  return getByLogin;
};

const validateUser = async (
  userLogin: User['login'],
  userPassword: User['password']
) => {
  console.log('------ validateUser () --------');

  const user = await findUserByLogin(userLogin);

  if (!user) {
    return null;
  }
  const isCorrectPassword = await compare(userPassword, user.password);
  // Здесь, User.password уже захэшированный.
  console.log(
    'Результат сравнения зашифрованного пароля и вводимого пароля',
    isCorrectPassword
  );

  return isCorrectPassword;
};

const generateAuthToken = async (userId: User['id'], login: User['login']) => {
  console.log('Попытка сгенерироват JWT токен');
  /* console.log('config is', config); */

  const token = jwt.sign({ id: userId, login }, config.JWT_SECRET);
  console.log('token is', token);

  return token;
};

/* const auth = async (login, password) => {
  // const { login, password} = req.body;
  const user: User | undefined = await findUserByLogin(login);

  if (!user) {
    return null;
  }
  const token = await generateAuthToken(user['id'], user['login']);
  if (!token) {
    res.status(403).send('Wrong login or wrong password');
  } else {
    res.status(200).json({ token });
  }
}; */

export { findUserById, validateUser, findUserByLogin, generateAuthToken };
