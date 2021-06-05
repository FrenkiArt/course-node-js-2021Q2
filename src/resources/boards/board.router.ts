import * as express from 'express';
import Board from './board.model';
import * as boardsService from './board.service';
import * as tasksService from '../tasks/task.service';

const router = express.Router();

router.route('/').get(async (_req, res) => {
  const boards = await boardsService.getAll();
  res.status(200).json(boards);
});

router.route('/:boardId').get(async (req, res) => {
  const boardById = await boardsService.getById(String(req.params['boardId']));

  if (boardById) {
    res.status(200).json(boardById);
  } else {
    res.status(404).json({
      id: req.params['boardId'],
      error: `Доски с Id ${req.params['boardId']} не найдено.`,
    });
  }
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.createBoard(new Board(req.body));
  res.status(201).json(board);
});

router.route('/:boardId').put(async (req, res) => {
  const boards = await boardsService.getAll();

  let boardIsBe = null;

  boards.forEach((item) => {
    if (item.id === req.params['boardId']) {
      boardIsBe = true;
    }
  });

  if (boardIsBe) {
    boardsService.updateBoard(req.body, String(req.params['boardId']));
    res.status(200).json(req.body);
  } else {
    res
      .status(404)
      .json({ error: `Доски с Id ${req.params['boardId']} не найдено.` });
  }
});

router.route('/:boardId').delete(async (req, res) => {
  const boards = await boardsService.getAll();

  let boardIsBe = null;

  boards.forEach((item) => {
    if (item.id === req.params['boardId']) {
      boardIsBe = true;
    }
  });

  if (boardIsBe) {
    boardsService.deleteBoard(String(req.params['boardId']));
    tasksService.deleteAllTasksByBoardId(String(req.params['boardId']));

    res.status(204).json({ message: 'Объект удалён' });
  } else {
    res
      .status(404)
      .json({ error: `Доски с Id ${req.params['userId']} не найдено.` });
  }
});

export default router;
