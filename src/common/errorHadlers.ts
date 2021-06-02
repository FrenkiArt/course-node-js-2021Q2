import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { finished } from 'stream';

/**
 * Logging function
 * Функция логгирования всего
 * @param {Request} req - request object | Объект запроса
 * @param {Response} res - response object | Объект ответа
 * @param {NextFunction} next() - Transfer control to the next function | Передача
 * управления следующей функции
 */
function logEverything(req: Request, res: Response, next: NextFunction) {
  const logStartTime = new Date();

  next();

  finished(res, () => {
    console.log('Дата и время начала лога', logStartTime);
    console.log('req.protocol', req.protocol);
    console.log('req.hostname', req.hostname);
    console.log('req.originalUrl', req.originalUrl);
    console.log('params', req.params);
    console.log('body', req.body);
    console.log('status code', res.statusCode);
  });
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
} /*
function newErrorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {} */ // module.exports = { logErrors, clientErrorHandler, errorHandler };

/**
 * Обработчик ошибок
 * @param {Object} err - error object | Объект ошибки
 * @param {Object} req - request object | Объект запроса
 * @param {Object} res - response object | Объект ответа
 * @param {Function} next() - Transfer control to the next function | Передача
 * управления следующей функции
 */ export { logEverything, clientErrorHandler, errorHandler };
