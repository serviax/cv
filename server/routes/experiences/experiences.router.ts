import Router from 'express';
import asyncHandler from 'express-async-handler';
import ExperienceModel from './experiences.model';
import { DEFAULT_LANGUAGE } from '../constants';
import { sendErrorResponse } from '../utils';
import expressAsyncHandler from 'express-async-handler';

import validate from 'validate-azure-ad-token';


const experiencesRouter = Router();

experiencesRouter.get('/:lang', asyncHandler(async (request, response) => {
  let lang = request.params.lang;
  if (!lang)
    lang = DEFAULT_LANGUAGE;

  const experiences = await ExperienceModel.find({ languageCode: lang });
  response.json(experiences);
}));

experiencesRouter.post('/', asyncHandler(async (request, response) : Promise<any> => {
  const body = request.body;

  try {
    const authHeader = request.headers.authorization ?? 'Bearer ';
    const token = authHeader.substring('Bearer '.length);

    const decodedToken = await validate(token, {
      tenantId: 'd0297283-c422-4d16-b040-f109857c175b',
      applicationId: '63ee2b80-46c8-416d-9860-e05a937cda26',
      audience: '63ee2b80-46c8-416d-9860-e05a937cda26',
      scopes: ['User.Read']
    });

    console.log('decodedToken', decodedToken);
  } catch (error: unknown) {
    console.error('error', error);
    return response.status(500).send({error: error});
  }

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