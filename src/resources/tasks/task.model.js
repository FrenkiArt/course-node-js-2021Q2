const uuid = require('uuid');

class Task {
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