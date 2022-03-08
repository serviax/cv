import 'dotenv/config';
import NODE_ENVS from './config';
import express from 'express';
import mongoose from 'mongoose';
import contentRouter from './routes/content/content.router';
import personalRouter from './routes/personal/personal.router';
import cors from 'cors';
import keywordRouter from './routes/keywords/keywords.router';
import experiencesRouter from './routes/experiences/experiences.router';
import authenticationRouter from './middlewares/middleware.authentication';

// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

const app = express();

app.use(cors());
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(authenticationRouter);


// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


// app.use('/users', usersRouter);

mongoose.connect(NODE_ENVS.MONGO_DB_CONNECTION_STRING)
  .then(() => {
    const PORT = 7000;

    app.get('/', (req, res) => res.send('Express with type script server has been started'));

    app.use('/api/content', contentRouter);
    app.use('/api/personal', personalRouter);
    app.use('/api/keywords', keywordRouter);
    app.use('/api/experiences', experiencesRouter);

    app.listen(PORT, () => {
      console.log(`started server, runnig at port ${PORT}`);
    });

  }, (error) => console.error('failed to connect', error))
  .catch((error) => console.error('could not connect', error));


export default app;