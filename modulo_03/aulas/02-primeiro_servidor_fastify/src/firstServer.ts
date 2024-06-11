import fastify from "fastify"

const server = fastify({
    logger: true
})

server.get('/', function controler (request, answer) {
    const welcome = 'Hello mundo dos servidores Nodes.js com Typscript...'
    return answer.send(welcome)
})

server.listen({
    port: 3000
})