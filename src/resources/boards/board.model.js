const uuid = require('uuid');

/**
 * Board Class | Класс Доски
 * @class
 */
class Board {
  /**
   * This class creates an instance of the user's whiteboard.
   * Этот класс создаёт экземпляр доски пользователя.
   * @param {string} id - ID of the user's board.| ID доски пользователя.
   * @param {string} columnsCounter - Column counter.| Счётчик колонок.
   * @param {string} title - The title of the board.| Заголовок доски.
   * @param {string} userId - User ID.| ID пользователя.
   * @param {string} columns - Associative array of columns.| Ассоциативный
   * массив колонок.
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

export default Board;
