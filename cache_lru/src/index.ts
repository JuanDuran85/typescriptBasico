// Example: Using LRU cache

import { LRUCache } from "./main";

const cacheExample: LRUCache<string> = new LRUCache<string>(4);
console.debug(cacheExample);

cacheExample.setItem("key_1_example", "value_1_example");
cacheExample.setItem("key_2_example", "2");
cacheExample.setItem("key_3_example", "value_3_example");
cacheExample.setItem("key_4_example", "4");

console.debug(cacheExample);

console.debug(cacheExample.getItem("key_1_example"));
console.debug(cacheExample.getItem("key_2_example"));
console.debug(cacheExample.getItem("key_3_example"));
console.debug(cacheExample.getItem("key_4_example"));

cacheExample.setItem("NEW_key_1", "NEW_value_1");
console.debug(cacheExample);

console.debug(cacheExample.getItem("key_1_example"));
console.debug(cacheExample.getItem("NEW_key_1"));
