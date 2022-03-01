"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const content_router_1 = __importDefault(require("./routes/content/content.router"));
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const app = (0, express_1.default)();
// app.use(logger('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/users', usersRouter);
mongoose_1.default.connect(process.env.MONGO_DB_CONNECTION_STRING)
    .then(result => {
    const PORT = 7000;
    app.get('/', (req, res) => res.send('Express with type script server has been started'));
    app.use('/content', content_router_1.default);
    app.listen(PORT, () => {
        console.log(`started server, runnig at port ${PORT}`);
    });
}, (error) => console.error('failed to connect', error))
    .catch((error) => console.error('could not connect', error));
exports.default = app;
//# sourceMappingURL=app.js.map