const uuid = require('uuid');

class Board {
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

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }

  static getId(board) {
    const { id } = board;
    return { id };
  }
}

module.exports = Board;
