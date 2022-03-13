import mongoose, { ValidatorProps } from 'mongoose';
import NODE_ENVS from '../../config';
import {defaultFormatReturnObject} from '../shared/utils.model';
import { AddressSchema } from './address.model';

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  title: String,
  birthDate: {
    type: Date,
    required: true,
    validate: {
      validator: (value: Date) => {
        return value && value < new Date();
      },
      message: (props: ValidatorProps) => `${props.value} is not a date in the past. A birthdate can only be in the past.`
    }
  },
  address: AddressSchema,
  mobileNumber: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => {
        const regex = new RegExp('[^0-9]', 'ig');
        const digitsOnly = value.replace(regex, '');
        return digitsOnly.length >= Number(NODE_ENVS.MINIMUM_PHONE_NUMBER_LENGTH);
      },
      message: (props: ValidatorProps) => `mobile number ${props.value} is not in correct format. Mobile number should have at least ${NODE_ENVS.MINIMUM_PHONE_NUMBER_LENGTH} digits`
    }
  },
  driverLicense: String,
});
defaultFormatReturnObject(PersonSchema);

const PersonModel = mongoose.model('person', PersonSchema);
export { PersonSchema, PersonModel as default };
