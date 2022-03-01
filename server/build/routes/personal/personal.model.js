"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const Address = new Schema({
    street: String,
    houseNumber: Number,
    numberExtension: String,
    municipality: String,
    postalCode: String,
    country: { type: String, match: /^[a-z]{2}$/ },
    latitude: Number,
    longitude: Number
});
const PersonDetails = new Schema({
    firstName: String,
    lastName: String,
    birthDate: Date,
    address: Address,
    mobileNumber: String,
    driverLicense: String,
});
//# sourceMappingURL=personal.model.js.map