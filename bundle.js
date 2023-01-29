'use strict';

var test = (function () {
    console.log('test');
});

var hello = function () {
    console.log('Hello World');
    test();
};
hello();
