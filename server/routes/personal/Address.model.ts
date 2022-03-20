import mongoose from 'mongoose';
import {defaultFormatReturnObject} from '../shared/utils.model';

const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  street: { type: String, required: true },
  houseNumber: { type: String, required: true },
  numberExtension: String,
  municipality: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, match: [/^[A-Za-z]{2}$/, 'country must be an ISO 3166 Alpha-2 code'] },
  latitude: { type: Number, min: -90, max: 90 },
  longitude: { type: Number, min: -180, max: 180 }
});
defaultFormatReturnObject(AddressSchema);

const AddressModel = mongoose.model('address', AddressSchema);
export { AddressSchema, AddressModel as default };