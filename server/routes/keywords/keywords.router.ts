import Router from 'express';
import asyncHandler from 'express-async-handler';
import TranslationModel, { Translation } from '../translations/translation.model';
import { KeyWordModel } from './keyword.model';


const keywordRouter = Router();

keywordRouter.get('/',asyncHandler( async(request, response) => {
  const keywords = await KeyWordModel.find({});
  response.json(keywords);
}));

keywordRouter.post('/', asyncHandler( async(request, response) => {
  const body = request.body;

  const matchingKeyword = await KeyWordModel.findOne({'keyWord': body.keyWord });
  if (matchingKeyword) {
    response.status(409).send(`Keyword ${matchingKeyword.keyWord} already exists, consider updating this keyword. (by using PUT)`);
    return;
  }

  const translations = body.translations.map((t:Translation) => new TranslationModel({... t}));
  const keyWord = new KeyWordModel({... body, translations: translations });

  const result = await keyWord.save();
  response.json(result);
}));


export default keywordRouter;