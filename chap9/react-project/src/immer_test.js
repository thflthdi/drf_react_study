// const { produce } = require('immer');

// const fruits = ['orange', 'apple', 'lemon', 'banana'];

// const newfruits = produce(fruits, (draft) => {
//   draft.splice(1, 2, 'strawberry');
// });

// console.log('fruits: ', fruits);
// console.log('newfruits: ', newfruits);

const { produce } = require('immer');

const baseState = [
  {
    todo: 'Learn typescript',
    done: true,
  },
  {
    todo: 'Try immer',
    done: false,
  },
];

const newbaseState = produce(baseState, (draft) => {
  draft.splice(1, 1, { todo: 'Try immer', done: true });
  draft.splice(2, 0, { todo: 'Tweet about it' });
});

const newbaseState2 = produce(baseState, (draft) => {
  draft[1].done = true;
  draft.push({ todo: 'Tweet about it' });
});

console.log('fruits: ', baseState);
console.log('newfruits: ', newbaseState);
console.log('newfruits: ', newbaseState2);
