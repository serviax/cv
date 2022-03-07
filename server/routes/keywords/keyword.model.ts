import mongoose from 'mongoose';
import { TranslationSchema } from '../translations/translation.model';

const Schema = mongoose.Schema;

const keyWordSchema = new Schema({
  keyWord: String,
  translations: [TranslationSchema]
});

const KeyWordModel = mongoose.model('keyword', keyWordSchema);
export { keyWordSchema, KeyWordModel};