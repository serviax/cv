import 'dotenv/config';
import NODE_ENVS from './config';

import cors from 'cors';
import express from 'express';
import serveStatic from 'serve-static';
import mongoose from 'mongoose';
import morgan from 'morgan';
import compression from 'compression';

import authenticationRouter from './middlewares/middleware.authentication';
import personalRouter from './routes/personal/personal.router';
import createSectionRouter from './routes/shared/section.router';
import { ExperienceSchema } from './routes/work-experience/work-experience.model';
import { KeyWordSchema } from './routes/keyword/keyword.model';

import { sendExpressErrorResponse } from './routes/shared/utils';
import developmentKnowledgeRouter from './routes/development-knowledge/development-knowledge.router';
import { LanguageKnowledgeSchema } from './routes/language-knowledge/language-knowledge.model';
import { UpdateKnowledgeSchema } from './routes/update-knowledge/update-knowledge.model';
import educationRouter from './routes/education/education.router';

const app = express();
console.log('starting server');
console.log('settings', NODE_ENVS.PORT, NODE_ENVS.MONGO_DB_CONNECTION_STRING);

mongoose.connect(NODE_ENVS.MONGO_DB_CONNECTION_STRING)
  .then(() => {
    const PORT = Number(NODE_ENVS.PORT) ?? 8080;

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(morgan(':method :status :url :response-time ms'));
    app.use(compression());

    app.use(authenticationRouter);

    app.get('/api/hello', (request, response) => {
      response.send('hello there, the server is running').end();
    });

    app.use('/api/personal', personalRouter);

    const keywordRouter = createSectionRouter('keyword', KeyWordSchema);
    app.use('/api/keywords', keywordRouter);

    const experiencesRouter = createSectionRouter('work-experience', ExperienceSchema);
    app.use('/api/work-experiences', experiencesRouter);

    app.use('/api/development-knowledges', developmentKnowledgeRouter);

    const languagesRouter = createSectionRouter('language-knowledge', LanguageKnowledgeSchema);
    app.use('/api/language-knowledges', languagesRouter);

    const updateKnowledgeRouter = createSectionRouter('update-knowledge', UpdateKnowledgeSchema);
    app.use('/api/update-knowledges', updateKnowledgeRouter);

    app.use('/api/education', educationRouter);

    app.use(serveStatic('static'));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    app.use(function (err: any, req: any, res: any, next: any) {

      if (err.name === 'UnauthorizedError') {
        return sendExpressErrorResponse(res, 401, 'Your token is invalid');
      }
      if (err.name === 'TokenValidationError') {
        return sendExpressErrorResponse(res, 401, `Your token failed to validate because of the following reason : ${err.message}`);
      }

      return sendExpressErrorResponse(res, 500, `Error ${err.name} happened, message: ${err.message}`);
    });

    app.listen(PORT, () => {
      console.log(`started server, runnig at port ${PORT}`);
    });

  }, (error) => console.error('failed to connect', error))
  .catch((error) => console.error('could not connect', error));


export default app;