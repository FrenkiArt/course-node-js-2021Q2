import { Request, Response, NextFunction } from 'express';
import { finished } from 'stream';
import fs from 'fs';

/**
 * Обработка не найденной страницы 404
 * @param {Request} req - request object | Объект запроса
 * @param {Response} res - response object | Объект ответа
 */
function page404(req: Request, res: Response) {
  const textRow = `${req.protocol} ${req.hostname} ${req.originalUrl} \n`;

  console.log('Такой страницы не найдено', textRow);
  fs.appendFile('./logs/error-404-log.txt', textRow, (error) => {
    if (error) {
      throw error;
    }
  });

  res
    .status(404)
    .json({ error: `Далеко собрался? Такой страницы не найдено!` });
}

/**
 * Logging function
 * Функция логгирования всего
 * @param {Request} req - request object | Объект запроса
 * @param {Response} res - response object | Объект ответа
 * @param {NextFunction} next() - Transfer control to the next
 * function | Передача управления следующей функции
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

    const textRow = `${logStartTime} ${req.protocol} ${req.hostname} ${
      req.originalUrl
    } ${JSON.stringify(req.params)} ${JSON.stringify(req.body)} ${
      res.statusCode
    } \n`;

    fs.appendFile('./logs/log.txt', textRow, (error) => {
      if (error) {
        throw error;
      }
    });
  });
}

interface globalError extends Error {
  statusCode?: number;
  status?: string;
}

/**
 * Error logging function
 * Функция логгирования ошибок
 * @param {Error} err - error object | Объект ошибки
 * @param {Request} _req - request object | Объект запроса
 * @param {Response} res - response object | Объект ответа
 * @param {NextFunction} _next() - Transfer control to the next
 * function | Передача управления следующей функции
 */
function errorHandler(
  err: globalError,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'Error';

  console.log('err.statusCode', err.statusCode);
  console.log('err.status', err.status);
  console.log('err.message', err.message);

  const textRow = `${err.statusCode} ${err.status} ${err.message} \n`;

  /* fs.appendFile('./logs/errors-log.txt', textRow, (error) => {
    if (error) {
      throw error;
    }
  }); */

  fs.appendFileSync('./logs/errors-log.txt', textRow, {
    encoding: 'utf8',
    flag: 'w',
  });

  res.status(err.statusCode).send({
    status: err.status,
    message: err.message,
  });
}

export { logEverything, errorHandler, page404 };
