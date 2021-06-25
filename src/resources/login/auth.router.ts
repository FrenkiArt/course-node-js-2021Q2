import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import config from '../../common/config';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.header('Authorization');

  if (authHeader !== undefined) {
    const tokenString = req.header('Authorization');

    if (tokenString !== undefined) {
      const [type, token] = tokenString.split(' ');

      if (type !== 'Bearer') {
        res.status(401).json({
          error: `Схема авторизации неправильная.`,
        });
      } else {
        const data = jwt.verify(String(token), config.JWT_SECRET);
        console.log('--------- data is ---', data);

        return next();
      }
    }
  }

  res.status(401).json({ error: 'Unauthorized' });
};

export default authMiddleware;
