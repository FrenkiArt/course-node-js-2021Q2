/* eslint-disable no-param-reassign */
const uuid = require('uuid');

class Board {
  constructor({
    id = uuid.v4(),
    title = 'Board title',
    columns = [
      {
        id: uuid.v4(),
        title: 'string',
        order: 0,
      },
    ],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((item) => {
      if (!item.id) {
        item.id = uuid.v4();
      }
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
