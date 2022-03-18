import mongoose, { SchemaDefinitionProperty } from 'mongoose';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const defaultTransform = (doc: any, returnedObj: any) => {
  returnedObj.id = returnedObj._id.toString();
  delete returnedObj._id;
  delete returnedObj.__v;
};

const defaultFormatReturnObject = (schema: mongoose.Schema) => {
  schema.set('toJSON', {
    transform: defaultTransform
  });
};

const languageCodeDefinition: SchemaDefinitionProperty = { type: String, maxlength: 2, match: [/^[a-z]{2}$/, 'The language code must a valid ISO-639-1 code.'] };

export { defaultTransform, languageCodeDefinition, defaultFormatReturnObject };