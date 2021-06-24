import 'reflect-metadata';
import config from './common/config';
import app from './app';
import { TryDBConnect } from './common/inMemoryDb';

TryDBConnect(() => {
  app.listen(config.PORT, () => {
    console.log(`App is running on http://localhost:${config.PORT}`);
  });
});
