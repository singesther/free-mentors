import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user_routes';
import mentorRoutes from './routes/mentor_routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1/auth', userRoutes);

// app.use('/api/v1/user', adminRoutes);
// app.use('/api/v1/mentors', mentorRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Connected on ${port}`);
});

export default app;