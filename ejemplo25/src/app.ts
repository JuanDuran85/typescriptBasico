/**
 *
 * Working with generic
 *
 */

// creating a generic function
// merging two objects with a generic functions

function merge<T,U>(objOne: T, objTwo: U){
  return {...objOne, ...objTwo};
}

const mergeResult = merge({name: 'Juan'},{age: 37});
console.log({mergeResult});
console.log(mergeResult.age);
console.log(mergeResult.name);

