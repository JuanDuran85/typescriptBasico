/**
 *
 * Working with generic
 *
 */

// creating a generic function
// merging two objects with a generic functions

function merge<T, U>(objOne: T, objTwo: U) {
  return { ...objOne, ...objTwo };
}

const mergeResult = merge({ name: "Juan" }, { age: 37 });
console.log({ mergeResult });
console.log(mergeResult.age);
console.log(mergeResult.name);

// Type contrains
//we’ll create an interface that implement a constraint to avoid other types of elements

function mergeWithContrains<T extends object, U extends object>(
  objOne: T,
  objTwo: U
) {
  return { ...objOne, ...objTwo };
}

const mergeResultWithContrains = mergeWithContrains(
  { name: "Juan" },
  { age: 37 }
);
console.log({ mergeResultWithContrains });
console.log(mergeResultWithContrains.age);
console.log(mergeResultWithContrains.name);

// creating a generic function
// generic function with interface and constrains

interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionText: string = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = `Got more than one element. ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("texto numero 1"));
console.log(countAndDescribe(["elemento 1"]));

// the keyof conntrains

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return `Value: ${obj[key]}`;
}

console.log(extractAndConvert({name:'Juan'}, 'name'));

// Working with generic classes

// Simple Generic Classes
class DataStoregeGeneric<T> {
  private data: T[] = [];

  addItems(item: T){
    this.data.push(item);
  }

  removeItem(item: T){
    this.data.splice(this.data.indexOf(item),1);
  }

  getItems(){
    return [...this.data];
  }
}

const textStorage = new DataStoregeGeneric();
textStorage.addItems(3);
textStorage.addItems(4);
textStorage.addItems('5');
textStorage.addItems('Texto');
textStorage.addItems({name: "Juan"});
textStorage.addItems([1,2,3,4,"otro texto"]);
textStorage.removeItem(4);
console.log(textStorage.getItems());