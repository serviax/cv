import mongoose from 'mongoose';
import { defaultFormatReturnObject, languageCodeDefinition } from '../shared/utils.model';

const Schema = mongoose.Schema;

const KeyWordSchema = new Schema({
  languageCode: languageCodeDefinition,
  keyWord: { type: String, required: true},
});
defaultFormatReturnObject(KeyWordSchema);


const KeyWordModel = mongoose.model('keyword', KeyWordSchema);
export { KeyWordSchema, KeyWordModel};