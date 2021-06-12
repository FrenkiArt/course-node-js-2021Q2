import config from './common/config';
import app from './app';

const server = app.listen(config.PORT, () => {
  console.log(`App is running on http://localhost:${config.PORT}`);
});

process.on('unhundledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('unhundledRejection');
  server.close(() => {
    process.exit(1);
  });
});

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('uncaughtException');
  server.close(() => {
    process.exit(1);
  });
});
