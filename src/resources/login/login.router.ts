import * as express from 'express';
import User from '../../entity/user.model';
/* import * as usersService from './user.service'; */
import * as loginService from './login.service';

const router = express.Router();

router.route('/login').post(
  async (req, res): Promise<void> => {
    console.log('Попытка залогиниться');

    const { login } = req.body.params;
    const user: User | undefined = await loginService.findUserByLogin(login);

    if (!user) {
      res.status(403).json({
        error: `Login ${req.body.params['login']} failed! User not found`,
      });
    } else {
      const token = await loginService.generateAuthToken(user['id']);
      res.status(200).json({ token });
    }
  }
);

export default router;
