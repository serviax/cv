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
import { sendErrorResponse } from './routes/utils';
import morgan from 'morgan';

const app = express();

mongoose.connect(NODE_ENVS.MONGO_DB_CONNECTION_STRING)
  .then(() => {
    const PORT = Number(NODE_ENVS.PORT) ?? 7000;

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(morgan(':method :status :url :response-time ms - :req[authorization]'));

    app.use(authenticationRouter);
  
    app.use('/api/content', contentRouter);
    app.use('/api/personal', personalRouter);
    app.use('/api/keywords', keywordRouter);
    app.use('/api/experiences', experiencesRouter);


    app.use(function (err: any, req: any, res: any, next: any) {

      if (err.name === 'UnauthorizedError') {
        return sendErrorResponse(res, 401, 'Your token is invalid');
      }
      if (err.name === 'TokenValidationError') {
        return sendErrorResponse(res, 401, `Your token failed to validate because of the following reason : ${err.message}`);
      }

      return sendErrorResponse(res, 500, `Error ${err.name} happened, message: ${err.message}`);
    });

    app.listen(PORT, () => {
      console.log(`started server, runnig at port ${PORT}`);
    });

  }, (error) => console.error('failed to connect', error))
  .catch((error) => console.error('could not connect', error));


export default app;