// ** https://github.com/VeritasSoftware/ts-generic-collections/blob/master/projects/ts-generic-collections/src/lib/dictionary.ts

import { KeyValuePair } from "./key-value-pair"
import { IDictionary } from "./dictionary-i"

export class Dictionary<TKey, TValue> implements IDictionary<TKey, TValue> {
  private array: Array<KeyValuePair<TKey, TValue>> = new Array<KeyValuePair<TKey, TValue>>()

  constructor(array: Array<KeyValuePair<TKey, TValue>> | null = null) {
    if (array) {
      this.array = array
    }
  }

  /* IList */

  add(key: TKey, value: TValue): void {
    const pair = new KeyValuePair<TKey, TValue>(key, value)

    if (this.containsKey(key)) {
      throw 'Duplicate key. Cannot add.'
    }

    this.array.push(pair)
  }

  addRange(items: KeyValuePair<TKey, TValue>[]): void {
    items.forEach(x => this.add(x.key, x.value))
  }

  removeAt(index: number): void {
    this.array.splice(index, 1)
  }

  clear(): void {
    this.array = new Array<KeyValuePair<TKey, TValue>>()
  }

  remove(predicate: (item: KeyValuePair<TKey, TValue>) => boolean): void {
    const temp = new Array<KeyValuePair<TKey, TValue>>()

    this.array.forEach(element => {
      if (!predicate(element)) {
        temp.push(element)
      }
    })

    this.array = temp
  }
  containsKey(key: TKey): boolean {
    return this.any((x: any) => this.objCompare(x.key, key))
  }

  any(predicate?: (item: KeyValuePair<TKey, TValue>) => boolean): boolean {
    if (!predicate) {
      return this.array.length > 0
    }

    for (let i = 0; i < this.array.length; i++) {
      if (predicate(this.array[i])) {
        return true
      }
    }

    return false
  }

  all(predicate?: (item: KeyValuePair<TKey, TValue>) => boolean): boolean {
    if (!predicate) {
      return this.array.length > 0
    }

    for (let i = 0; i < this.array.length; i++) {
      if (!predicate(this.array[i])) {
        return false
      }
    }

    return true
  }

  objCompare(obj1: any, obj2: any) {
    if (
      typeof obj1 !== 'object' &&
      typeof obj1 !== 'function' &&
      typeof obj2 !== 'object' &&
      typeof obj2 !== 'function'
    ) {
      return obj1 === obj2
    }

    //Loop through properties in object 1
    for (const p in obj1) {
      //Check property exists on both objects
      if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false

      switch (typeof obj1[p]) {
        //Deep compare objects
        case 'object':
          if (!this.objCompare(obj1[p], obj2[p])) return false
          break

        //Compare function code
        case 'function':
          if (typeof obj2[p] == 'undefined' || (p != 'compare' && obj1[p].toString() != obj2[p].toString()))
            return false
          break

        //Compare values
        default:
          if (obj1[p] != obj2[p]) return false
      }
    }

    //Check object 2 for any extra properties
    for (const p in obj2) {
      if (typeof obj1[p] == 'undefined') return false
    }

    return true
  }
}

