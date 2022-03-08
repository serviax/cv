import Router from 'express';
import asyncHandler from 'express-async-handler';
import ExperienceModel from './experiences.model';
import { DEFAULT_LANGUAGE } from '../constants';
import { sendErrorResponse } from '../utils';

const experiencesRouter = Router();

experiencesRouter.get('/:lang', asyncHandler(async (request, response) => {

  let lang = request.params.lang;
  if (!lang)
    lang = DEFAULT_LANGUAGE;

  const experiences = await ExperienceModel.find({ languageCode: lang });
  response.json(experiences);
}));

experiencesRouter.post('/', asyncHandler(async (request, response): Promise<any> => {
  const body = request.body;

  const user = request.user;
  console.log('the user is', user);

  const experience = new ExperienceModel({ ...body });
  const result = await experience.save();
  response.json(result);
}));

// The Promise<any> is a fix for a mistake in the typings definition file
experiencesRouter.delete('/', asyncHandler(async (request, response): Promise<any> => {
  const id = request.params.id;
  if (!id) {
    return sendErrorResponse(400, 'You need to provide an id to remove');
  }

  const experience = await ExperienceModel.findById(id);
  if (!experience) {
    return sendErrorResponse(404, `An experience with id ${id} does not exist`);
  }

  await experience.deleteOne();
  return response.status(204).end();
}));


export default experiencesRouter;