// implement your server here
// require your posts router and connect it here
const express = require('express')
const postsRouter = requier('./posts/post-router')
const server = express()


server.use(express.json())

server.use('./api/post', postsRouter)

server.use('*', (req, res) => {
    res.status(400).json({
        message: 'not found'
    })
})


module.exports = server