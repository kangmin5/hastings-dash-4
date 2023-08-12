import { ItemNotFound as NOT_FOUND , MultipleInstances as MULTIPLE} from "./collection-union"
import { IVector } from "./collection-type"


export class Vector<T> implements IVector<T> {

    private list: Array<T> = new Array<T>();

    constructor(array: Array<T> | null = null) {
        if (array)
            this.list = array;
    }

    /* IList */

    add(item: T) : void {
        this.list.push(item);
    }

    addRange(items: T[]) : void {
        items.forEach(x => this.add(x));
    }

    remove(predicate: (item:T) => boolean) : void {
        const temp = new Array<T>();

        this.list.forEach(element => {
            if (!predicate(element))
            {
                temp.push(element);
            }
        });

        this.list = temp;
    }

    removeAt(index: number) : void {
        this.list.splice(index, 1);
    }

    clear() : void {
        this.list = new Array<T>();
    }

    get length(): number {
        return this.list.length;
    }

    elementAt(index: number) : T {
        try {
            return this.list[index];
        }
        catch (e) {
            return null as any as any;
        }
    }

    any(predicate?: (item: T)=> boolean) : boolean {
        if (!predicate) {
            return this.list.length > 0;
        }

        for (let i=0; i<this.list.length; i++) {
            if (predicate(this.list[i]))
            {
                return true;
            }
        }

        return false;
    }

    all(predicate?: (item: T)=> boolean) : boolean {
        if (!predicate) {
            return this.list.length > 0;
        }

        for (let i=0; i<this.list.length; i++) {
            if (!predicate(this.list[i]))
            {
                return false;
            }
        }

        return true;
    }



    singleOrDefault(predicate: (item: T)=> boolean) : T {
        const temp = new Array<T>();

        this.list.filter(element => {
            if (predicate(element))
            {
                temp.push(element);
            }
        });

        if (temp.length > 1) {
            throw MULTIPLE.message;
        }

        if (temp.length <= 0) {
            return null as any;
        }

        return temp[0];
    }

    firstOrDefault(predicate: (item: T)=> boolean) : T {
        for (let i=0; i<this.length; i++) {
            const item = this.list[i];
            if (predicate(item))
            {
                return item;
            }
        }

        return null as any;
    }

    lastOrDefault(predicate: (item: T)=> boolean) : T {
        for (let i=this.length; i>=0; i--) {
            const item = this.list[i - 1];
            if (predicate(item))
            {
                return item;
            }
        }

        return null as any;
    }



    forEach(predicate: (item: T)=> void) : void {
        this.list.forEach(x => predicate(x));
    }

    toArray() : Array<T> {
        return this.list.slice();
    }




    sum(predicate: (item: T)=> number) : number {
        let sum: any = 0;
        this.list.forEach(x => sum = sum + predicate(x));

        return sum;
    }

    avg(predicate: (item: T)=> number) : number {
        return this.sum(predicate) / this.length;
    }

    min(predicate: (item: T)=> number) : number {
        let min: any = 0;
        let i = 0;
        this.list.forEach(x =>
        {
            if (i == 0) {
                min = predicate(x);
            }
            else {
                const val = predicate(x);
                if (val < min) {
                    min = val;
                }
            }
            i++;
        });

        return min;
    }

    max(predicate: (item: T)=> number) : number {
        let max: any = 0;
        let i = 0;
        this.list.forEach(x =>
        {
            if (i == 0) {
                max = predicate(x);
            }
            else {
                const val = predicate(x);
                if (val > max) {
                    max = val;
                }
            }
            i++;
        });

        return max;
    }

}

// ** https://github.com/VeritasSoftware/ts-generic-collections/blob/master/projects/ts-generic-collections/src/lib/list.ts
