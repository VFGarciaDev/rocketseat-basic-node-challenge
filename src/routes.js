import { randomUUID } from 'node:crypto'
import { Database } from "./database.js"
import { getDate } from "./utils/dateFormatter.js"

const database = new Database()

export const routes = [
    {
        method: 'GET',
        path: '/tasks',
        handler: (req, res) => {
            const tasks = database.getData('/tasks')

            return res
                .setHeader('Content-type', 'application/json')
                .end(JSON.stringify(tasks))
        }
    },
    {
        method: 'POST',
        path: '/tasks',
        handler: (req, res) => {
            const { title, desc } = req.body
            const task = {
                id: randomUUID(),
                title,
                desc,
                createdDate: getDate(),
                updatedDate: null,
                completedDate: null
            }

            database.insertData('/tasks', task)
            return res.writeHead(201).end()
        }
    },
    {
        method: 'PUT',
        path: '',
        handler: () => { }
    },
    {
        method: 'PATCH',
        path: '',
        handler: () => { }
    },
    {
        method: 'DELETE',
        path: '',
        handler: () => { }
    }
]