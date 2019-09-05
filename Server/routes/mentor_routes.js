import express from 'express';
import mentorController from '../controllers/mentor.controller';
import userAuth from '../middleware/authUser';

const router = express.Router();

router.get('/mentors', userAuth, mentorController.getAllMentor);
router.get('/mentors/:mentorId', userAuth, mentorController.getOneMentor);

export default router;