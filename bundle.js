'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const test_1 = tslib_1.__importDefault(require("./test"));
const database_1 = require("./database");
const hello = () => {
    console.log('Hello World');
    console.log(database_1.client);
    (0, test_1.default)();
};
hello();
