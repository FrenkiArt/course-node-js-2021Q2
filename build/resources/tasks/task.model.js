import uuid from 'uuid';
/**
 * Task class | Класс задачи
 * @class
 */
class Task {
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
     * @param {string} columnId - Column ID. ID колонки.
     */
    constructor({ id = uuid.v4(), title = 'title', order = 0, description = 'description', userId = 'string', boardId = 'string', columnId = 'string', } = {}) {
        this.id = id;
        this.title = title;
        this.order = order;
        this.description = description;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId = columnId;
    }
}
export default Task;
