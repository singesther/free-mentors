import express from 'express';
import mentorShipController from '../controllers/mentorship.controller';
import userAuth from '../middleware/authUser';


const router = express.Router();



router.post('/sessions', userAuth, mentorShipController.createMentorship);
router.patch('/:sessionId/accept', userAuth, mentorShipController.acceptMentorshipRequest);
router.patch('/:sessionId/reject', userAuth, mentorShipController.rejectMentorshipRequest);
router.get('/', userAuth, mentorShipController.viewAllMentorshipSessionRequest);

export default router;