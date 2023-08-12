export interface IVector<T>  {
    add(item: T) : void;
    addRange(items: T[]) : void;
    remove(predicate: (item:T) => boolean) : void | null;
    removeAt(index: number) : void;
    clear() : void;
}

