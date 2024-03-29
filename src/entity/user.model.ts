import * as uuid from 'uuid';
import { Entity, Column, PrimaryColumn } from 'typeorm';

interface IUser {
  id: string;
  name: string;
  login: string;
  password: string;
}

/**
 * User Class | Класс Пользователя
 * @class
 */
@Entity()
class User implements IUser {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  login: string;

  @Column()
  password: string;

  /**
   * This class creates an instance of the user.
   * Этот класс создаёт экземпляр пользователя.
   * @param {string | null} id - User ID.| ID пользователя.
   * @param {string} name - The user name.| Имя пользователя.
   * @param {string} login - The user's username.| Логин пользователя.
   * @param {string} password - User Password.| Пароль пользователя.
   */
  constructor({
    id = uuid.v4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * This function returns the user object cleared of the password.
   * Эта функция возвращает объект пользователя очищенный от пароля.
   * @param {object | User} user - User object.| Объект пользователя.
   * @return {object} - Password-cleared user object | Очищенный
   * от пароля объект пользователя
   */
  static toResponse(user: User) {
    const { id, name, login } = user;
    return { id, name, login };
  }

  /**
   * This function returns the ID of the passed user.
   * Эта функция возвращает ID переданного пользователя.
   * @param {object | User} user - User object.| Объект пользователя.
   * @return {string} - User ID.| ID пользователя.
   */
  static getId(user: { id: string }) {
    const { id } = user;
    return { id };
  }
}

export default User;
