const uuid = require('uuid');

class User {
  /**
   * Этот класс создаёт экземпляр пользователя.
   * @param {string} id - ID пользователя.
   * @param {string} name - Имя пользователя.
   * @param {string} login - Логин пользователя.
   * @param {string} password - Пароль пользователя.
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
   * Эта функция возвращает объект пользователя очищенный от пароля.
   * @param {object} user Объект пользователя.
   * @returns {object} Очищенный от пароля объект пользователя
   */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }

  /**
   * Эта функция возвращает ID переданного пользователя.
   * @param {object} user Объект пользователя.
   * @returns {string} ID пользователя.
   */
  static getId(user) {
    const { id } = user;
    return { id };
  }
}

module.exports = User;
