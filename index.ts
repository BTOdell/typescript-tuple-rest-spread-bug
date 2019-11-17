/**
 * Uses 'conditional types' to produce a tuple (array) of argument types based on the input type T.
 * Example:
 *  - If T is an array, then the array itself is used as the argument types.
 *  - If T is anything else, then a tuple (of size 1) containing the single type is produced.
 */
type Args<T> = T extends any[] ? T : [T];

export class EventEmitter<E> {

    public restConditional<K extends keyof E>(eventName: K, listener: (...args: Args<E[K]>) => any): void {
    }

    public restGenerics<K extends keyof E>(eventName: K, listener: (...args: [boolean, boolean]) => any): void {
    }

    public rest(listener: (...args: [boolean, boolean]) => any): void {
    }

    public normal(listener: (b: boolean, b2: boolean) => any): void {
    }

}
