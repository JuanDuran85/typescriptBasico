/**
 * !Essential Generic Types in the Standard Library
 */

// First, a generic type is a type that is defined in terms of one or more type parameters.
// Type parameters are placeholders for actual types that are specified when the generic type is used.
// They are defined using angle brackets (<>) after the name of the type.

/**
 * !1. Array<T>
 */

// The Array<T> type is a generic type that represents an array of elements of type T. It provides a number of methods for working with arrays, such as map, filter, reduce, and sort.

const numberOfItems: Array<number> = [3, 6, 1, 8, 4, 9, 12];
console.debug({ numberOfItems });
const averageOfNumbers: number = numberOfItems.reduce(
  (prev, curr, index, arr) => prev + curr,
  0
);
console.debug( averageOfNumbers / numberOfItems.length );


/**
 * !2. Map<K, V>
 */

// The Map<K, V> type is a generic type that represents a collection of key-value pairs. It provides a way to store and retrieve values based on a key.

interface MapData {
  name: string;
  population: number;
}
const dataOne = {
  name: "New York",
  population: 8_000_000
}
const dataTwo = {
  name: "Los Angeles",
  population: 4_000_000
}
const dataThree = {
  name: "Chicago",
  population: 3_000_000
}

const newMapData: Map<string, MapData> = new Map<string, MapData>();
newMapData.set(dataOne.name, dataTwo);
newMapData.set(dataTwo.name, dataTwo);
newMapData.set(dataThree.name, dataThree);
console.debug(newMapData.get("Chicago"));
console.debug(newMapData.values());

/**
 * !3. Set<T>
 */

// The Set<T> type is a generic type that represents a collection of unique values of type T. It provides a way to add and remove values and to check if a value is in the set.

const setValuesData = new Set<number>();
setValuesData.add(1);
setValuesData.add(4);
setValuesData.add(6);
setValuesData.add(1);//NOSONAR
setValuesData.add(7);
setValuesData.add(11);
setValuesData.add(10);
setValuesData.add(1);//NOSONAR
setValuesData.add(4);//NOSONAR
console.debug(setValuesData);

