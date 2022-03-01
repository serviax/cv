import mongoose from 'mongoose';
import { TranslationSchema } from './translation.model';

const Schema = mongoose.Schema;

const ContentElementSchema = new Schema({
  container: String,
  key: String,
  value: String,
  translations: [TranslationSchema]
});

const ContentElementModel = mongoose.model('content', ContentElementSchema);

export { ContentElementSchema, ContentElementModel as default};
