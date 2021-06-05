"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const process_1 = __importDefault(require("process"));
dotenv_1.default.config({
    path: path_1.default.join(__dirname, '../../.env'),
});
exports.default = {
    PORT: process_1.default.env['PORT'],
    NODE_ENV: process_1.default.env['NODE_ENV'],
    MONGO_CONNECTION_STRING: process_1.default.env['MONGO_CONNECTION_STRING'],
    JWT_SECRET_KEY: process_1.default.env['JWT_SECRET_KEY'],
    AUTH_MODE: process_1.default.env['AUTH_MODE'] === 'true',
};
