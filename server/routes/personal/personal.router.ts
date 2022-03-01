import PersonModel from './personal.model';
import Router from 'express';
import AddressModel from './Address.model';

const personalRouter = Router();

personalRouter.get('/', async (request, response) => {
  const persons = await PersonModel.find({});
  response.json(persons);
});

personalRouter.get('/:id', async (request, response) => {
  const id = request.params.id;
  const persons = await PersonModel.findById(id);
  response.json(persons);
});


personalRouter.post('/', async (request, response) => {
  const body = request.body;

  const searchPerson = await PersonModel.findOne({ 'firstName': body.firstName, 'lastName': body.lastName });
  if (searchPerson) {
    response.status(409).send(`Person ${searchPerson.firstName} ${searchPerson.lastName} already exists, consider updating this person. (by using PUT)`);
  }

  const address = new AddressModel({ ...body.address });
  const person = new PersonModel({
    ...body,
    address: address
  });

  const result = await person.save();
  response.json(result);
});


personalRouter.put('/:id', async (request, response) => {
  const id = request.params.id;
  const body = request.body;

  const address = {... body.address };
  const person = { ... body, address: address };

  const updatedPerson = await PersonModel.findByIdAndUpdate(id, person, {new: true});
  response.json(updatedPerson);
});

export default personalRouter;