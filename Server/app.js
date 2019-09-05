import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user_routes';
import mentorRoutes from './routes/mentor_routes';
import mentorshipRoutes from './routes/mentorship_route';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1/auth', userRoutes);

 app.use('/api/v1/', mentorRoutes);
 app.use('/api/v1/', mentorshipRoutes);
 


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Connected on ${port}`);
});

export default app;