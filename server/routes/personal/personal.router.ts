import PersonModel from './personal.model';
import Router from 'express';
import asyncHandler from 'express-async-handler';
import { sendExpressErrorResponse } from '../shared/utils';
import AddressModel from './address.model';

const personalRouter = Router();

personalRouter.get('/', asyncHandler(async (request, response) => {
  const person = await PersonModel.findOne({});
  // We are only supporting it for one person
  response.json(person);
}));

personalRouter.post('/', asyncHandler(async (request, response) => {
  const body = request.body;

  const searchPerson = await PersonModel.findOne({});
  if (searchPerson) {
    sendExpressErrorResponse(response, 409, 'There is already a person in the database, consider updating it by using PUT.');
    return;
  }

  const address = new AddressModel({ ...body.address });
  const person = new PersonModel({
    ...body,
    address: address
  });

  const result = await person.save();
  response.json(result);
}));


personalRouter.put('/', asyncHandler(async (request, response) => {
  const body = request.body;

  const searchPerson = await PersonModel.findOne({ firstName: body.firstName, lastName: body.lastName });
  if (!searchPerson) {
    sendExpressErrorResponse(response, 409, 'The person you submitted cannot be found, ' +
      'consider using DELETE instead if you want to replace the person, consider using POST if you want to insert a person.');
    return;
  }
  const id = searchPerson.id;

  const address = { ...body.address };
  const person = { ...body, address: address };

  const updatedPerson = await PersonModel.findByIdAndUpdate(id, person, { new: true, runValidators: true });
  response.json(updatedPerson);
}));

personalRouter.delete('/', asyncHandler(async (request, response) => {
  await PersonModel.deleteMany({});
  response.status(204).end();
  return;
}));


export default personalRouter;