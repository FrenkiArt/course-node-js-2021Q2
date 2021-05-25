import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';

/**
 * Error logging function
 * Функция логгирования ошибок
 * @param {Object} err - error object | Объект ошибки
 * @param {Object} _req - request object | Объект запроса
 * @param {Object} _res - response object | Объект ответа
 * @param {Function} next() - Transfer control to the next function | Передача
 * управления следующей функции
 */
function logErrors(
  err: ErrorRequestHandler,
  _req: Request,
  _res: Response,
  next: NextFunction
) {
  console.error(err);
  next(err);
}

/**
 * Error logging function
 * Функция логгирования ошибок
 * @param {Object} err - error object | Объект ошибки
 * @param {Object} req - request object | Объект запроса
 * @param {Object} res - response object | Объект ответа
 * @param {Function} next() - Transfer control to the next function | Передача
 * управления следующей функции
 */
function clientErrorHandler(
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' });
  } else {
    next(err);
  }
}

/**
 * Error logging function
 * Функция логгирования ошибок
 * @param {Object} err - error object | Объект ошибки
 * @param {Object} _req - request object | Объект запроса
 * @param {Object} res - response object | Объект ответа
 * @param {Function} next() - Transfer control to the next function | Передача
 * управления следующей функции
 * @return {Void}
 */
function errorHandler(
  err: ErrorRequestHandler,
  _req: Request,
  res: Response,
  next: NextFunction
) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', { error: err });
}

// module.exports = { logErrors, clientErrorHandler, errorHandler };
export { logErrors, clientErrorHandler, errorHandler };
