import fs from 'fs';
import config from './common/config';
import app from './app';

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
