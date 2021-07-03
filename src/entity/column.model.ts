import * as uuid from 'uuid';
import { Entity, Column, PrimaryColumn } from 'typeorm';

interface IColumn {
  id: string;
  title: string;
  order: number;
}

/**
 * Column Class | Класс Колонки
 * @class
 */
@Entity()
class MyColumn implements IColumn {
  /**
   *
   * @param {string} id - ID
   * @param {string} title - The title
   * @param {number} order - The order
   */
  constructor({ id = uuid.v4(), title = 'Board title', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

  @PrimaryColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  order: number;
}

export default MyColumn;
