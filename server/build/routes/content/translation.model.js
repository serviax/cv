"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.TranslationElementSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const TranslationElementSchema = new Schema({
    //  ISO 639-codes
    language: { type: String, match: /^[a-z]{2}$/ },
    translation: String,
});
exports.TranslationElementSchema = TranslationElementSchema;
const TranslationElementModel = mongoose_1.default.model('translation', TranslationElementSchema);
exports.default = TranslationElementModel;
//# sourceMappingURL=translation.model.js.map