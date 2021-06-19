import * as uuid from 'uuid';
import { Entity, Column, PrimaryColumn } from 'typeorm';
import Board from './board.model';
import User from './user.model';
import MyColumn from './column.model';

interface ITask {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string;
  columnId: string | null;
}

/**
 * Task class | Класс задачи
 * @class
 */
@Entity()
class Task implements ITask {
  /**
   * This class creates an instance of the user's task.
   * Этот класс создаёт экземпляр задачи пользователя.
   * @param {string} id - Task ID.| ID задачи.
   * @param {string} title - The title of the task.| Заголовок задачи.
   * @param {number} order - The sequential number of the task.| Порядковый
   * номер задачи.
   * @param {string} description - Task description.| Описание задачи.
   * @param {string | null} userId - User ID.| ID пользователя.
   * @param {string} boardId - Board ID | ID доски.
   * @param {string | null} columnId - Column ID. ID колонки.
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

  @PrimaryColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  order: number;

  @Column()
  description: string;

  @Column({ type: 'text', nullable: true })
  userId: User['id'] | null;

  @Column({ type: 'text' })
  boardId: Board['id'];

  @Column({ type: 'text', nullable: true })
  columnId: MyColumn['id'] | null;
}

export default Task;
