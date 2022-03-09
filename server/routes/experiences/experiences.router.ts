import Router from 'express';
import asyncHandler from 'express-async-handler';
import ExperienceModel from './experiences.model';
import  NODE_ENVS from '../../config';
import { sendErrorResponse } from '../utils';

const experiencesRouter = Router();

experiencesRouter.get('/:lang', asyncHandler(async (request, response) => {

  let lang = request.params.lang;
  if (!lang)
    lang = NODE_ENVS.DEFAULT_LANGUAGE;

  const experiences = await ExperienceModel.find({ languageCode: lang });
  response.json(experiences);
}));

experiencesRouter.post('/', asyncHandler(async (request, response): Promise<any> => {
  const body = request.body;

  const user = request.user;

  const experience = new ExperienceModel({ ...body });
  const result = await experience.save();
  response.json(result);
}));

// The Promise<any> is a fix for a mistake in the typings definition file
experiencesRouter.delete('/:id', asyncHandler(async (request, response): Promise<any> => {
  const id = request.params.id;
  if (!id) {
    return sendErrorResponse(response, 400, 'You need to provide an id to remove');
  }

  const experience = await ExperienceModel.findById(id);
  if (!experience) {
    return sendErrorResponse(response, 404, `An experience with id ${id} does not exist`);
  }

  await experience.deleteOne();
  return response.status(204).end();
}));


export default experiencesRouter;