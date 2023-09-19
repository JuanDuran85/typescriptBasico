// Define an interface for the cache items with key-value pairs using generic types.

export interface CacheItem<T> {
    key: string;
    value: T;
}