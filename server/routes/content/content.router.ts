import ContentElement from './content.model';
import TranslationElement from './translation.model';
import { Router } from 'express';

const contentRouter = Router();


contentRouter.get('/', async (request, response) => {
  const contentElements = await ContentElement.find({});
  response.json(contentElements);
});

contentRouter.post('/', async (request, response) => {
  const body = request.body;

  const contentElement = new ContentElement({
    container: body.container,
    key: body.key,
    value: body.value,
  });

  contentElement.translations = body.translations.map((trans: { language: string, translation: string }) => new TranslationElement({ language: trans.language, translation: trans.translation }));


  const result = await contentElement.save();
  response.json(result);
});

export default contentRouter;