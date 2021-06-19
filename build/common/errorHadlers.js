"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.page404 = exports.errorHandler = exports.logEverything = void 0;
const stream_1 = require("stream");
const fs_1 = __importDefault(require("fs"));
/**
 * Обработка не найденной страницы 404
 * @param {Request} req - request object | Объект запроса
 * @param {Response} res - response object | Объект ответа
 */
function page404(req, res) {
    const textRow = `${req.protocol} ${req.hostname} ${req.originalUrl} \n`;
    console.log('Такой страницы не найдено', textRow);
    fs_1.default.appendFile('./logs/error-404-log.txt', textRow, (error) => {
        if (error) {
            throw error;
        }
    });
    res
        .status(404)
        .json({ error: `Далеко собрался? Такой страницы не найдено!` });
}
exports.page404 = page404;
/**
 * Logging function
 * Функция логгирования всего
 * @param {Request} req - request object | Объект запроса
 * @param {Response} res - response object | Объект ответа
 * @param {NextFunction} next() - Transfer control to the next
 * function | Передача управления следующей функции
 */
function logEverything(req, res, next) {
    const logStartTime = new Date();
    next();
    stream_1.finished(res, () => {
        console.log('Дата и время начала лога', logStartTime);
        console.log('req.protocol', req.protocol);
        console.log('req.hostname', req.hostname);
        console.log('req.originalUrl', req.originalUrl);
        console.log('params', req.params);
        console.log('body', req.body);
        console.log('status code', res.statusCode);
        const textRow = `${logStartTime} ${req.protocol} ${req.hostname} ${req.originalUrl} ${JSON.stringify(req.params)} ${JSON.stringify(req.body)} ${res.statusCode} \n`;
        fs_1.default.appendFile('./logs/log.txt', textRow, (error) => {
            if (error) {
                throw error;
            }
        });
    });
}
exports.logEverything = logEverything;
/**
 * Error logging function
 * Функция логгирования ошибок
 * @param {Error} err - error object | Объект ошибки
 * @param {Request} _req - request object | Объект запроса
 * @param {Response} res - response object | Объект ответа
 * @param {NextFunction} _next() - Transfer control to the next
 * function | Передача управления следующей функции
 */
function errorHandler(err, _req, res, _next) {
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
    fs_1.default.appendFileSync('./logs/errors-log.txt', textRow, {
        encoding: 'utf8',
        flag: 'w',
    });
    res.status(err.statusCode).send({
        status: err.status,
        message: err.message,
    });
}
exports.errorHandler = errorHandler;
