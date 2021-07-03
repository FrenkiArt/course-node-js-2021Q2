"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TryDBConnect = exports.dataBase = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const dataBase = {
    users: [],
    boards: [],
    tasks: [],
};
exports.dataBase = dataBase;
const connectToDB = async () => {
    // let connection;
    try {
        await typeorm_1.createConnection();
        const connection = typeorm_1.getConnection();
        if (!connection.isConnected)
            await connection.connect();
        console.log('well done');
    }
    catch (error) {
        console.error('getConnection failed', error);
    }
};
const TryDBConnect = async (cb) => {
    try {
        await connectToDB();
        cb();
    }
    catch (err) {
        console.error('DB connect is error hehe');
    }
};
exports.TryDBConnect = TryDBConnect;
