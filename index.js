// require your server and launch it here


const server= require('./api/server')

const PORT = 9000

server.listen(PORT, () => {
    console.log('server listens on 9000', PORT)
})