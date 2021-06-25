// import { getRepository } from 'typeorm';
import * as uuid from 'uuid';
import { createUser /* , getByLogin */ } from '../resources/users/user.service';

const createAdmin = async () => {
  /* const isAdmin = getByLogin('admin'); */
  /* const userRepository = getRepository(User);
  const userByLogin = await userRepository.findOne({ login }); */
  /* if (isAdmin) {
    console.log('admin уже существует');
    console.log(isAdmin);
  } else {
    createUser({
      id: uuid.v4(),
      name: 'admin',
      login: 'admin',
      password: 'admin',
    });
    console.log('Новый admin создан.');
  } */

  createUser({
    id: uuid.v4(),
    name: 'admin',
    login: 'admin',
    password: 'admin',
  });
  console.log('Новый admin создан.');
};

export default createAdmin;
