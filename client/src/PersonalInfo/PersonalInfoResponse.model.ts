import AddressResponse from './AddressResponse.model';

export interface PersonalInfoResponse {
  firstName: string;
  lastName: string;
  birthDate: Date;
  mobileNumber: string;
  driverLicense: string;
  address: AddressResponse;
}

export default PersonalInfoResponse;