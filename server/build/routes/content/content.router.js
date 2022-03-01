"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const content_model_1 = __importDefault(require("./content.model"));
const translation_model_1 = __importDefault(require("./translation.model"));
const express_1 = require("express");
const contentRouter = (0, express_1.Router)();
contentRouter.get('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const contentElements = yield content_model_1.default.find({});
    response.json(contentElements);
}));
contentRouter.post('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const body = request.body;
    const contentElement = new content_model_1.default({
        container: body.container,
        key: body.key,
        value: body.value,
    });
    contentElement.translations = body.translations.map((trans) => new translation_model_1.default({ language: trans.language, translation: trans.translation }));
    const result = yield contentElement.save();
    response.json(result);
}));
exports.default = contentRouter;
//# sourceMappingURL=content.router.js.map