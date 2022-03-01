"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.ContentElementSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const translation_model_1 = require("./translation.model");
const Schema = mongoose_1.default.Schema;
const ContentElementSchema = new Schema({
    container: String,
    key: String,
    value: String,
    translations: [translation_model_1.TranslationElementSchema]
});
exports.ContentElementSchema = ContentElementSchema;
const ContentElementModel = mongoose_1.default.model('content', ContentElementSchema);
exports.default = ContentElementModel;
//# sourceMappingURL=content.model.js.map