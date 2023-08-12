import { KeyValuePair } from './key-value-pair';

export interface IDictionary<TKey, TValue> {
    add(key: TKey, value: TValue): void
    addRange(items: KeyValuePair<TKey, TValue>[]): void
    remove(predicate: (item: KeyValuePair<TKey, TValue>) => boolean): void
    removeAt(index: number): void
    clear(): void
  
    // containsKey(key: TKey) : boolean;
    // containsValue(value: TValue) : boolean;
    // tryGetValue(key: TKey) : TValue;
  }
  