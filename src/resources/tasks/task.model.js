const uuid = require('uuid');

class Task {
  /**
   * Этот класс создаёт экземпляр задачи пользователя.
   * @param {string} id - ID задачи.
   * @param {string} title - Заголовок задачи.
   * @param {string} order - Порядковый номер задачи.
   * @param {string} description - Описание задачи.
   * @param {string} userId - ID пользователя.
   * @param {string} boardId - ID доски.
   * @param {string} columnId - ID колонки.
   */
  constructor({
    id = uuid.v4(),
    title = 'title',
    order = 0,
    description = 'description',
    userId = 'string',
    boardId = 'string',
    columnId = 'string',
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;
