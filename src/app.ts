import express, { Request, Response, NextFunction } from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import usersRouter from './resources/users/user.router';
import boardsRouter from './resources/boards/board.router';
import tasksRouter from './resources/tasks/task.router';
import { logEverything, errorHandler, page404 } from './common/errorHadlers';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logEverything);

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', usersRouter);
app.use('/boards', boardsRouter);
app.use('/boards/:boardId/tasks', tasksRouter);
app.use('*', page404);

app.use(errorHandler);

export default app;
