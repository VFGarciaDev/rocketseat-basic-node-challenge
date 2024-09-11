import fs from 'node:fs/promises'

const databasePath = new URL('../data.json', import.meta.url)

export class Database {
    #database = {}

    constructor() {
        fs.readFile(databasePath, 'utf8').then(data => {
            this.#database = JSON.parse(data)
        }).catch(() => {
            this.#persist()
            // if data.json doesn't exist yet
        })
    }

    #persist() {
        fs.writeFile(databasePath, JSON.stringify(this.#database))
    }

    getData(table) {
        let data = this.#database[table] ?? []

        return data
    }

    insertData(table, data) {
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data)
        } else {
            this.#database[table] = [data]
        }
        this.#persist()

        return data
    }

    updateData() {

    }

    deleteData() {

    }

    // getData() {

    // }
}