"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.clientErrorHandler = exports.logErrors = void 0;
/**
 * Error logging function
 * Функция логгирования ошибок
 * @param {Object} err - error object | Объект ошибки
 * @param {Object} _req - request object | Объект запроса
 * @param {Object} _res - response object | Объект ответа
 * @param {Function} next() - Transfer control to the next function | Передача
 * управления следующей функции
 */
function logErrors(err, _req, _res, next) {
    console.error(err);
    next(err);
}
exports.logErrors = logErrors;
/**
 * Error logging function
 * Функция логгирования ошибок
 * @param {Object} err - error object | Объект ошибки
 * @param {Object} req - request object | Объект запроса
 * @param {Object} res - response object | Объект ответа
 * @param {Function} next() - Transfer control to the next function | Передача
 * управления следующей функции
 */
function clientErrorHandler(err, req, res, next) {
    if (req.xhr) {
        res.status(500).send({ error: 'Something failed!' });
    }
    else {
        next(err);
    }
}
exports.clientErrorHandler = clientErrorHandler;
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
function errorHandler(err, _req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.render('error', { error: err });
}
exports.errorHandler = errorHandler;
