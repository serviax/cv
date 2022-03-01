import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  street: String,
  houseNumber: Number,
  numberExtension: String,
  municipality: String,
  postalCode: String,
  country: {type: String, match:/^[a-z]{2}$/ },
  latitude: Number,
  longitude: Number
}
);

const AddressModel = mongoose.model('address', AddressSchema);
export { AddressSchema, AddressModel as default};