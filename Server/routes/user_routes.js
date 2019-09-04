import express from 'express';
import userController from '../controllers/user.controller';
import userValidations from '../helpers/userValidation';

const router = express.Router();


router.post('/signup', userController.signup);


export default router;
