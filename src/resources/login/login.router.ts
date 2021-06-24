import * as express from 'express';
import User from '../../entity/user.model';
/* import * as usersService from './user.service'; */
import * as loginService from './login.service';

const router = express.Router();

// router.route('/login').post(
/* router.post(
  '/',
  async (req, res): Promise<void> => */
router.route('/login').post(
  async (req, res): Promise<void> => {
    console.log('Попытка залогиниться');

    const { login, password } = req.body;
    const user: User | undefined = await loginService.findUserByLogin(login);
    const validPassword = await loginService.validateUser(login, password);

    if (!user) {
      console.log('-------- user is UNDEFINED', user);

      res.status(403).json({
        error: `Login ${req.body['login']} failed! User not found`,
      });
    } else if (validPassword === null) {
      res.status(403).json({
        error: `Login ${req.body['login']} failed! User not found при попытке
         валидации пароля.`,
      });
    } else if (!validPassword) {
      console.log('-------- validPassword is', validPassword);

      res.status(403).json({
        error: `Password ${req.body['password']} failed!`,
      });
    } else {
      const token = await loginService.generateAuthToken(
        user['id'],
        user['login']
      );

      res.status(200).json({ token });
    }
  }
);

export default router;
