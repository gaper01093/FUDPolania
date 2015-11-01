/*
 babel src --out-dir build
 webpack ./build/main.js ./compiled/comp.js
 */
var superTest = require('./testModule/test');

superTest.alle();