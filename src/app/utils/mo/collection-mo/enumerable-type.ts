export interface Enumerable<T> {
  elementAt(index: number) : T;
  any(predicate?: (item: T)=> boolean) : boolean;
  all(predicate?: (item: T)=> boolean) : boolean;
  single(predicate?: (item: T)=> boolean) : T;
  first(predicate?: (item: T)=> boolean) : T;
  last(predicate?: (item: T)=> boolean) : T;
  singleOrDefault(predicate: (item: T)=> boolean) : T;
  firstOrDefault(predicate: (item: T)=> boolean) : T;
  lastOrDefault(predicate: (item: T)=> boolean) : T;
  where(predicate: (item: T)=> boolean) : Enumerable<T>;
  select<TResult>(predicate: (item: T)=> TResult) : Enumerable<TResult>;
  selectMany<TResult>(predicate: (item: T)=> Array<TResult>) : Enumerable<TResult>;
  join<TOuter, TMatch, TResult>(outer: Enumerable<TOuter>, conditionInner: (item: T)=> TMatch,
                                  conditionOuter: (item: TOuter)=> TMatch, select: (x: T, y:TOuter)=> TResult, leftJoin?: boolean) : Enumerable<TResult>;
  groupBy(predicate: (item: T) => Array<any>) : Enumerable<GroupInterface<T>>;
  orderBy(comparer: ComparerInterface<T>) : Enumerable<T>;
  distinct(comparer: EqualityComparerInterface<T>) : Enumerable<T>;
  union(list: Enumerable<T>) : Enumerable<T>;
  reverse(): Enumerable<T>;
  skip(no: number) : Enumerable<T>;
  take(no: number) : Enumerable<T>;
  sum(predicate: (item: T)=> number) : number;
  avg(predicate: (item: T)=> number) : number;
  min(predicate: (item: T)=> number) : number;
  max(predicate: (item: T)=> number) : number;
  count(predicate?: (item: T)=> boolean) : number;
  forEach(predicate: (item: T)=> void) : void;
  length: number;
  toArray() : Array<T>;
  asEnumerable() : Enumerable<T>;
}

export interface GroupInterface<T> {
  groups: any[];
  vector: any;
}

export interface ComparerInterface<T> {
  compare(x:T, y: T) : number;
}

export interface EqualityComparerInterface<T> {
  equals(x:T, y: T) : boolean;
}
