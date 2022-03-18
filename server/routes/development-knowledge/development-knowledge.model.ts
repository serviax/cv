import mongoose from 'mongoose';
import { defaultFormatReturnObject } from '../shared/utils.model';

const Schema = mongoose.Schema;

const DevelopmentKnowledgeSchema = new Schema({
  technology: { type: String, required: true },
  level: { type: Number, required: true, min: 0, max: 5 },
  usedInProject: Boolean,
  followedTraining: Boolean,
  usedInLastYear: Boolean,
  usedInPersonalProject: Boolean
});
defaultFormatReturnObject(DevelopmentKnowledgeSchema);

const DevelopmentKnowledgeModel = mongoose.model('development-knowledge', DevelopmentKnowledgeSchema);
export { DevelopmentKnowledgeSchema, DevelopmentKnowledgeModel as default };