import mongoose from 'mongoose';
const Schema = mongoose.Schema;

interface Translation {
   language: string;
   translation: string;
}

const TranslationSchema = new Schema({
  //  ISO 639-codes
  language: {type: String, match: /^[a-z]{2}$/ },
  translation: String,
});

const TranslationModel = mongoose.model('translation',TranslationSchema);
export {Translation, TranslationSchema, TranslationModel as default };