import mongoose from 'mongoose';
import { defaultFormatReturnObject } from '../shared/utils.model';

const Schema = mongoose.Schema;

const EducationSchema = new Schema({
  startYear: { type: Number, min: 1900, max: new Date().getFullYear() },
  endYear: { type: Number, min: 1900, max: new Date().getFullYear() },
  name: { type: String, required: true },
  schoolName: { type: String, required: true },
  designatedTitle: { type: String, required: true }
});
defaultFormatReturnObject(EducationSchema);

const EducationModel = mongoose.model('education', EducationSchema);
export { EducationSchema, EducationModel as default };
