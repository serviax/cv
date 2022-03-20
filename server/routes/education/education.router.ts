import Router from 'express';
import asyncHandler from 'express-async-handler';
import { sendExpressErrorResponse } from '../shared/utils';
import EducationModel from './education.model';

const educationRouter = Router();

educationRouter.get('/', asyncHandler(async (request, response) => {
  const education = await EducationModel.findOne({});
  response.json(education);
}));

educationRouter.post('/', asyncHandler(async (request, response) => {
  const body = request.body;

  const searchEducation = await EducationModel.findOne({});
  if (searchEducation) {
    sendExpressErrorResponse(response, 409, 'There is already education in the database, consider updating it by using PUT.');
    return;
  }

  const education = new EducationModel({
    ...body
  });

  const result = await education.save();
  response.json(result);
}));


educationRouter.put('/', asyncHandler(async (request, response) => {
  const body = request.body;

  const searchEducation = await EducationModel.findOne({ });
  if (!searchEducation) {
    sendExpressErrorResponse(response, 409, 'There is no education found. ' +
      'consider using DELETE instead if you want to replace the education info, consider using POST if you want to insert educational info.');
    return;
  }
  const id = searchEducation.id;

  const education = { ...body };

  const updatedEducation = await EducationModel.findByIdAndUpdate(id, education, { new: true, runValidators: true });
  response.json(updatedEducation);
}));

educationRouter.delete('/', asyncHandler(async (request, response) => {
  await EducationModel.deleteMany({});
  response.status(204).end();
  return;
}));


export default educationRouter;