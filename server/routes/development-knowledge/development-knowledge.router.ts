import Router from 'express';
import asyncHandler from 'express-async-handler';
import DevelopmentKnowledgeModel from './development-knowledge.model';
import { sendExpressErrorResponse } from '../shared/utils';

const developmentKnowledgeRouter = Router();

developmentKnowledgeRouter.get('/', asyncHandler(async (request, response) => {
  const knowledges = await DevelopmentKnowledgeModel.find({});
  response.json(knowledges);
}));

developmentKnowledgeRouter.get('/:id', asyncHandler(async (request, response) => {
  const id = request.params.id;

  const knowledge = await DevelopmentKnowledgeModel.findById(id);
  if (!knowledge) {
    sendExpressErrorResponse(response, 404, `A development knowledge with id ${id} does not exist`);
    return;
  }

  response.json(knowledge);
}));

developmentKnowledgeRouter.post('/', asyncHandler(async (request, response) => {
  const body = request.body;
  const knowledge = new DevelopmentKnowledgeModel({ ...body });
  const result = await knowledge.save();
  response.json(result);
  return;
}));

developmentKnowledgeRouter.put('/:id', asyncHandler(async (request, response) => {
  const id = request.params.id;
  if (!id) {
    sendExpressErrorResponse(response, 400, 'You need to provide an id to update');
    return;
  }
  const body = request.body;
  
  const knowledge = { ...body};
  
  const updatedKnowledge = await DevelopmentKnowledgeModel.findByIdAndUpdate(id, knowledge,{new: true, runValidators: true});
  response.json(updatedKnowledge);
  return;
}));

developmentKnowledgeRouter.delete('/', asyncHandler(async (request, response) => {
  await DevelopmentKnowledgeModel.deleteMany({});
  response.status(204).end();
  return;
}));



developmentKnowledgeRouter.delete('/:id', asyncHandler(async (request, response) => {
  const id = request.params.id;

  const knowledge = await DevelopmentKnowledgeModel.findById(id);
  if (!knowledge) {
    sendExpressErrorResponse(response, 404, `A development knowledge with id ${id} does not exist`);
    return;
  }

  await knowledge.deleteOne();
  response.status(204).end();
  return;
}));

export default developmentKnowledgeRouter;