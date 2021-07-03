"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const config_1 = __importDefault(require("./config"));
const { POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, } = config_1.default;
exports.config = {
    type: 'postgres',
    host: 'host.docker.internal',
    port: POSTGRES_PORT,
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    autoReconnect: true,
    reconnectTries: 1000,
    reconnectInterval: 10000,
    // entities name should be **.entity.ts
    //  entities: [__dirname + '/**/*.entity{.ts,.js}'],
    // We are using migrations, synchronize should be set to false.
    // synchronize: process.env.TYPEORM_SYNCHRONIZE
    //  ? process.env.TYPEORM_SYNCHRONIZE.toLowerCase() === 'true'
    //  : false,
    synchronize: true,
    // Run migrations automatically,
    // you can disable this if you prefer running migration manually.
    //   migrationsRun: false,
    //    logging: false,
    // logger: 'advanced-console',
    // Allow both start:prod and start:dev to use migrations
    // __dirname is either dist or src folder, meaning either
    // the compiled js in prod or the ts in dev.
    //    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    // cli: {
    //     // Location of migration should be inside src folder
    //     // to be compiled into dist/ folder.
    //     migrationsDir: 'src/database/migrations'
    // }
};
