import { dataBase } from '../../common/inMemoryDb';
/**
 * This function returns an array of "Boards".
 * Эта функция возвращает массив "Досок".
 * @return {array} Associative array of "Boards".| Ассоциативный массив "Досок".
 */
const getAll = async () => dataBase.boards;
/**
 * This function returns the board by ID.
 * Эта функция возвращает доску по ID.
 * @param {string} boardId - Board ID.| ID доски.
 * @return {objecta | Board} Board object.| Объект доски.
 */
const getById = async (boardId) => dataBase.boards.filter((el) => el.id === boardId)[0];
/**
 * This function adds a board to the database.
 * Эта функция добавляет в базу доску.
 * @param {object | Board} board The user's board object.|
 * Объект доски пользователя.
 */
const addBoard = async (board) => {
    dataBase.boards.push(board);
};
/**
 * This function creates a new user board and adds it to the database.
 * Эта функция создания новой доски пользователя и добавления её в базу.
 * @param {object | Board} newBoard The object of the user's new board.| Объект
 * новой доски пользователя.
 * @return {object | Board} Board object.| Объект доски.
 */
const createBoard = async (newBoard) => {
    dataBase.boards.push(newBoard);
    return getById(newBoard.id);
};
/**
 * This function updates the user's board data in the database.
 * Эта функция обновляет данные доски пользователя в базе данных.
 * @param {object} boardArgs The object of the arguments to be passed.|
 * Объект передаваемых аргументов.
 * @param {string} boardId Board ID.| Id доски.
 */
const updateBoard = async (boardArgs, boardId) => {
    dataBase.boards.forEach((item) => {
        if (item.id === boardId) {
            item.title = boardArgs.title;
            item.columns = boardArgs.columns;
            return item;
        }
        return item;
    });
};
/**
 * This function removes the user's board from the database.
 * Эта функция удаляет доску пользователя из базы данных.
 * @param {string} boardId Board ID.| Id доски.
 */
const deleteBoard = async (boardId) => {
    const newDbTasks = [];
    dataBase.boards.forEach((item, index) => {
        if (item.id === boardId) {
            dataBase.boards.splice(index, 1);
        }
    });
    dataBase.tasks.forEach((item) => {
        if (item.boardId !== boardId) {
            newDbTasks.push(item);
        }
    });
    dataBase.tasks = newDbTasks;
};
export { getAll, addBoard, updateBoard, deleteBoard, getById, createBoard };
