import express, { Request, Response, NextFunction } from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import usersRouter from './resources/users/user.router';
import boardsRouter from './resources/boards/board.router';
import tasksRouter from './resources/tasks/task.router';
import loginRouter from './resources/login/login.router';
import authMiddleware from './resources/login/auth.router';

import {
  logErrors,
  clientErrorHandler,
  errorHandler,
} from './common/errorHadlers';
/* import createAdmin from './common/createAdmin'; */

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

/* createAdmin(); */

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use(loginRouter);

// app.use(authMiddleware);
console.log(authMiddleware);

app.use('/users', usersRouter);
app.use('/boards', boardsRouter);
app.use('/boards/:boardId/tasks', tasksRouter);

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

export default app;
