import 'babel-polyfill';
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};

export default Array.from(arrayLike)