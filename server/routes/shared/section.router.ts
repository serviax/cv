import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import NODE_ENVS from '../../config';
import { sendExpressErrorResponse } from './utils';

const createSectionRouter = (modelName: string, modelSchema: mongoose.Schema) => {

  const currentRouter = Router();
  const model = mongoose.model(modelName, modelSchema);

  currentRouter.get('/:lang', asyncHandler(async (request, response) => {
    let lang = request.params.lang;
    if (!lang)
      lang = NODE_ENVS.DEFAULT_LANGUAGE;

    const items = await model.find({ languageCode: lang });
    response.json(items);
  }));

  currentRouter.post('/', asyncHandler(async (request, response) => {
    const body = request.body;
    const item = new model({ ...body });
    const result = await item.save();
    response.json(result);
    return;
  }));

  currentRouter.put('/:id', asyncHandler(async (request, response) => {
    const id = request.params.id;
    if (!id) {
      sendExpressErrorResponse(response, 400, 'You need to provide an id to remove');
      return;
    }

    const searchItem = await model.findById(id);
    if (!searchItem) {
      sendExpressErrorResponse(response, 404, `Item with id ${id} does not exist`);
      return;
    }

    const body = request.body;
    const item = { ...body };

    const updatedItem = await model.findByIdAndUpdate(id, item, { new: true, runValidators: true });
    response.json(updatedItem);
    return;
  }));

  currentRouter.delete('/:id', asyncHandler(async (request, response) => {
    const id = request.params.id;
    if (!id) {
      sendExpressErrorResponse(response, 400, 'You need to provide an id to remove');
      return;
    }

    const experience = await model.findById(id);
    if (!experience) {
      sendExpressErrorResponse(response, 404, `An experience with id ${id} does not exist`);
      return;
    }

    await experience.deleteOne();
    response.status(204).end();
    return;
  }));

  currentRouter.delete('/', asyncHandler(async (request, response) => {
    await model.deleteMany({});
    response.status(204).end();
    return;
  }));

  return currentRouter;
};

export default createSectionRouter;