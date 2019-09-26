'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('babel-polyfill');

var arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};

exports.default = Array.from(arrayLike);