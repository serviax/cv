import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
  languageCode: { type: String, maxlength: 2, match: /^[a-z]{2}$/ },
  startDate: Date,
  endDate: Date,
  description: String,
  projects: [{
    description: String,
    tasks: [String],
  }],
  keywords: [String]
});


const ExperienceModel = mongoose.model('experience', ExperienceSchema);
export { ExperienceSchema, ExperienceModel as default };