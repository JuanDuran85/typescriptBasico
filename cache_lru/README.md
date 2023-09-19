#  Least Recently Used (LRU) cache using Node and TypeScript

## What is LRU cache?

An LRU cache is a cache with a fixed size that replaces the least used item with a new one, effectively managing its data. This cache ensures that frequently accessed items are consistently present while those accessed less frequently are removed.

## Implement the LRU Cache

The method is straightforward: we can create a FIFO (First In, First Out) queue with a fixed size for the cache. When the cache reaches its limit, we remove the first item from the list. Frequently accessed items continuously move to the end of the queue, reducing the likelihood of being evicted from the cache.