export default class Model {
    toJSON(): string {
        return JSON.stringify(this);
    }

    static fromJSON<T extends Model>(this: new (...args: any[]) => T, json: string): T {
        const data = JSON.parse(json);
        return Object.assign(new this(), data);
    }

    save() {}
}