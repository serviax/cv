import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LanguageKnowledgeSchema = new Schema({
  languageCode: { type: String, maxlength: 2, match: /^[a-z]{2}$/ },
  language: String,
  level: String
});

const LanguageKnowledgeModel = mongoose.model('language-knowledge', LanguageKnowledgeSchema);
export { LanguageKnowledgeSchema, LanguageKnowledgeModel as default };