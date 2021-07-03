<<<<<<< HEAD
import 'reflect-metadata';
// import { createConnection } from 'typeorm';
=======
import fs from 'fs';
>>>>>>> master
import config from './common/config';
import app from './app';
// import User from './entity/user.model';
import { TryDBConnect } from './common/inMemoryDb';

<<<<<<< HEAD
/* TryDBConnect(() => {
  app.listen(config.PORT, () => {
    console.log(`App is running on http://localhost:${config.PORT}`);
  });
}); */

TryDBConnect(() => {
  app.listen(config.PORT, () => {
    console.log(`App is running on http://localhost:${config.PORT}`);
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
=======
const server = app.listen(config.PORT, () => {
  console.log(`App is running on http://localhost:${config.PORT}`);
});

process.on('unhundledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('unhundledRejection');

  const textRow = `${err} ${err.message} \n`;

  fs.appendFileSync('./logs/errors-log.txt', textRow, {
    encoding: 'utf8',
    flag: 'w',
  });

  server.close(() => {
    process.exit(1);
  });
});

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('uncaughtException');

  const textRow = `${err} ${err.message} \n`;

  fs.appendFileSync('./logs/errors-log.txt', textRow, {
    encoding: 'utf8',
    flag: 'w',
  });

  server.close(() => {
    process.exit(1);
  });
});
>>>>>>> master
