import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TranslationSchema = new Schema({
  //  ISO 639-codes
  language: {type: String, match: /^[a-z]{2}$/ },
  translation: String,
});

const TranslationModel = mongoose.model('translation',TranslationSchema);
export {TranslationSchema, TranslationModel as default };