export class Map<T> {
    private m_mappedItems: KeyValuePair<T>; 

    constructor() {}

    public add(key: string, newItem: T) {
        this.items[key] = newItem;
    }

    public remove(key: string) {
        delete this.items[key];
    }

    public getItem(key: string): T {
        return this.items[key];
    }

    public contains(key: string): boolean {
        return Boolean(this.items[key]);
    }

    public get items(): KeyValuePair<T> {
        return this.m_mappedItems;
    }

    public get length(): number {
        return Object.keys(this.items).length;
    }
}

export interface KeyValuePair<T> {
    [key: string]: T
}