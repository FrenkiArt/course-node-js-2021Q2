import 'reflect-metadata';
import { createConnection } from 'typeorm';
import config from './common/config';
import app from './app';

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection()
  .then(async (connection) => {
    app.listen(config.PORT, () => {
      console.log(`App is running on http://localhost:${config.PORT}`);
    });
  })
  .catch((error) => console.log('TypeORM connection error: ', error));
