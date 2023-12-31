import { Enumerable, GroupInterface } from './enumable'
import Vector from './vector'

export class Group<T> implements GroupInterface<T> {
  groups: any[]
  vector: Vector<T>

  constructor(_groups: any[], _vector: Array<T>) {
    this.groups = _groups
    this.vector = new Vector<T>(_vector)
  }
}

export const objCompare = function (obj1: any, obj2: any) {
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
        if (!objCompare(obj1[p], obj2[p])) return false
        break

      //Compare function code
      case 'function':
        if (typeof obj2[p] == 'undefined' || (p != 'compare' && obj1[p].toString() != obj2[p].toString())) return false
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
