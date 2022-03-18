import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LanguageKnowledgeSchema = new Schema({
  languageCode: { type: String, maxlength: 2, match: /^[a-z]{2}$/ },
  order: { type: Number, required: true },
  language: { type: String, required: true },
  level: { type: Number, required: true, min: 0, max: 5 }
});

const LanguageKnowledgeModel = mongoose.model('language-knowledge', LanguageKnowledgeSchema);
export { LanguageKnowledgeSchema, LanguageKnowledgeModel as default };