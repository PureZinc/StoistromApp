import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

const databaseDetails = { name: "myDatabase.db", location: "default" };

export default class Model {
    toJSON(): string {
        return JSON.stringify(this);
    }

    static fromJSON<T extends Model>(this: new (...args: any[]) => T, json: string): T {
        const data = JSON.parse(json);
        return Object.assign(new this(), data);
    }

    async save(): Promise<void> {
        const db = await SQLite.openDatabase(databaseDetails);
        const tableName = this.constructor.name;
        const keys = Object.keys(this);
        const values = Object.values(this);

        try {
            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS ${tableName} (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    ${keys.map((key) => `${key} TEXT`).join(", ")}
                );
            `;
            await db.executeSql(createTableQuery);

            const placeholders = keys.map(() => "?").join(", ");
            const insertQuery = `
                INSERT INTO ${tableName} (${keys.join(", ")}) 
                VALUES (${placeholders});
            `;
            await db.executeSql(insertQuery, values);
        } catch (error) {
            console.error("Error saving data:", error);
            throw error;
        }
    }
    
    static async retrieve<T extends Model>(this: { new (...args: any[]): T; fromJSON(json: string): T }, where: Object): Promise<T[]> {
        const db = await SQLite.openDatabase(databaseDetails);
        let query = `SELECT * FROM ${this.name}`;

        if (Object.keys(where).length > 0) {
            query += ' WHERE ' + Object.keys(where).map(key => `${key} = ?`).join(' AND ');
        }

        try {
            const results = await db.executeSql(query, Object.values(where));

            const rows = results[0].rows;
            const models: T[] = [];

            for (let i = 0; i < rows.length; i++) {
                const row = rows.item(i);
                const jsonString = JSON.stringify(row);
                const model = this.fromJSON(jsonString);
                models.push(model);
            }

            return models;
        } catch (error) {
            console.error("Error retrieving data from SQLite:", error);
            throw error;
        }
    }
}