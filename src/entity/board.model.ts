import * as uuid from 'uuid';
import { Entity, Column, PrimaryColumn } from 'typeorm';
import MyColumn from './column.model';
// import User from './user.model';

interface IBoard {
  id: string;
  columnsCounter: number;
  title: string;
  userId: string | null;
  columns: Array<MyColumn>;
}

/**
 * Board Class | Класс Доски
 * @class
 */
@Entity()
class Board implements IBoard {
  /**
   * This class creates an instance of the user's whiteboard.
   * Этот класс создаёт экземпляр доски пользователя.
   * @param {string} id - ID of the user's board.| ID доски пользователя.
   * @param { number} columnsCounter - Column counter.| Счётчик колонок.
   * @param {string} title - The title of the board.| Заголовок доски.
   * @param {string} userId - User ID.| ID пользователя.
   * @param {MyColumn[]} columns - Associative array of columns.| Ассоциативный
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

  @PrimaryColumn('uuid')
  id: string;

  @Column()
  columnsCounter: number;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  userId: string | null;

  @Column('simple-array')
  columns: MyColumn[];
}

export default Board;
