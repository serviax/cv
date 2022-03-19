import AddressResponse from './AddressResponse.model';

export interface PersonalInfoResponse {
  firstName: string;
  lastName: string;
  birthDate: string; // everything we get back from the server is a string
  mobileNumber: string;
  driverLicense: string;
  email: string,
  address: AddressResponse;
}

export default PersonalInfoResponse;