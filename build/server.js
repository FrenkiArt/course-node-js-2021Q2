"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
// import { createConnection } from 'typeorm';
const config_1 = __importDefault(require("./common/config"));
const app_1 = __importDefault(require("./app"));
// import User from './entity/user.model';
const inMemoryDb_1 = require("./common/inMemoryDb");
/* TryDBConnect(() => {
  app.listen(config.PORT, () => {
    console.log(`App is running on http://localhost:${config.PORT}`);
  });
}); */
inMemoryDb_1.TryDBConnect(() => {
    app_1.default.listen(config_1.default.PORT, () => {
        console.log(`App is running on http://localhost:${config_1.default.PORT}`);
    });
});
/* createConnection()
  .then(async (connection) => {
    console.log('-----------------------------------');
    console.log('connection is:', connection);

    app.listen(config.PORT, () => {
      console.log(`App is running on http://localhost:${config.PORT}`);
    });
  })
  .catch((error) => console.log('TypeORM connection error: ', error)); */
// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
/* createConnection()
  .then(async (connection) => {
    // (connection)
    console.log('-----------------------------------');
    console.log('connection is:', connection);

    app.listen(config.PORT, () => {
      console.log(`App is running on http://localhost:${config.PORT}`);
    });

     await connection.manager.save(
      connection.manager.create(User, {
        name: 'Arthur',
        login: 'Best',
        password: 'password',
      })
    );
  })
  .catch((error) => console.log('TypeORM connection error: ', error)); */
