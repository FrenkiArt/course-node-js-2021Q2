"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getById = exports.deleteUser = exports.updateUser = exports.addNewUser = exports.getAll = void 0;
const usersRepo = __importStar(require("./user.memory.repository"));
const getAll = () => usersRepo.getAll();
exports.getAll = getAll;
const getById = (userId) => usersRepo.getById(userId);
exports.getById = getById;
const createUser = (newUser) => usersRepo.createUser(newUser);
exports.createUser = createUser;
const addNewUser = (newUser) => usersRepo.addNewUser(newUser);
exports.addNewUser = addNewUser;
const updateUser = (userArgs, userId) => usersRepo.updateUser(userArgs, userId);
exports.updateUser = updateUser;
const deleteUser = (userId) => usersRepo.deleteUser(userId);
exports.deleteUser = deleteUser;
