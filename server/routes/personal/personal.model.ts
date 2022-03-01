import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Address = new Schema({
  street: String,
  houseNumber: Number,
  numberExtension: String,
  municipality: String,
  postalCode: String,
  country: {type: String, match:/^[A-Za-z]{2}$/ },
  latitude: Number,
  longitude: Number
}
);

const PersonSchema = new Schema({
  firstName: String,
  lastName: String,
  birthDate: Date,
  address: Address,
  mobileNumber: String,
  driverLicense: String,
});

const PersonModel = mongoose.model('person', PersonSchema);
export { PersonSchema, PersonModel as default};
