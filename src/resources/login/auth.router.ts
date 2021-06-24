import express, { Request, Response, NextFunction } from 'express';

import User from '../../entity/user.model';
import * as loginService from './login.service';

const auth = express.Router();

auth.use();
