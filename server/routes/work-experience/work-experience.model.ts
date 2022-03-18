import mongoose from 'mongoose';
import { defaultFormatReturnObject } from '../shared/utils.model';

const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
  languageCode: { type: String, maxlength: 2, match: /^[a-z]{2}$/ },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: Date,
  companyName: { type: String, required: true },
  description: String,
  projects: [{
    title: { type: String, required: true },
    description: String,
    role: String,
    tasks: [String],
    keywords: [String],
    order: {type: Number, required: true},
    startDate: Date,
    endDate: Date
  }],
});

defaultFormatReturnObject(ExperienceSchema);



const ExperienceModel = mongoose.model('work-experience', ExperienceSchema);
export { ExperienceSchema, ExperienceModel as default };