const uuid = require('uuid');

class Board {
  /**
   * Этот класс создаёт экземпляр доски пользователя.
   * @param {string} id - ID доски пользователя.
   * @param {string} columnsCounter - Счётчик колонок.
   * @param {string} title - Заголовок доски.
   * @param {string} userId - ID пользователя.
   * @param {string} columns - Ассоциативный массив колонок.
   */
  constructor({
    id = uuid.v4(),
    columnsCounter = 0,
    title = 'Board title',
    userId = 'userId',
    columns = [
      {
        id: uuid.v4(),
        title: 'string',
        order: 0,
      },
      {
        id: uuid.v4(),
        title: 'string',
        order: 0,
      },
      {
        id: uuid.v4(),
        title: 'string',
        order: 0,
      },
    ],
  } = {}) {
    this.id = id;
    this.columnsCounter = columnsCounter;
    this.title = title;
    this.userId = userId;
    this.columns = columns.map((item) => {
      if (!item.id) {
        item.id = uuid.v4();
      }

      item.order = ++this.columnsCounter;

      return item;
    });
  }
}

module.exports = Board;
