import mongoose from 'mongoose';
import { defaultFormatReturnObject, languageCodeDefinition } from '../shared/utils.model';

const Schema = mongoose.Schema;

const UpdateKnowledgeSchema = new Schema({

  languageCode: languageCodeDefinition,
  year: { type: Number, required: true, min: 2008, max: new Date().getFullYear() },
  type: { type: String, required: true, enum: ['conference', 'training', 'home-project', 'certification'] },
  description: { type: String, required: true }
});

defaultFormatReturnObject(UpdateKnowledgeSchema);

const UpdateKnowledgeModel = mongoose.model('update-knowledge', UpdateKnowledgeSchema);
export { UpdateKnowledgeSchema, UpdateKnowledgeModel as default };