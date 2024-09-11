import { createServer } from "node:http"
import { json } from "./middleware/json.js"
import { routes } from "./routes.js"

const server = createServer(async (req, res) => {
    const { method, url } = req

    await json(req, res)

    const route = routes.find(route => {
        return route.method === method && route.path === url
    })

    if (route) {
        return route.handler(req, res)
    }

    return res.writeHead(404).end()
    // if doesn't find a route, return error 404
})

server.listen(5000)