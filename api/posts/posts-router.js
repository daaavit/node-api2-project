// implement your posts router here

const express = require('express')
const Post = require('./posts-model')

const router = express.Router()


router.get('/', (req, res) => {
    Post.find()
        .then(found => {
            res.json(found) 

        })
        .chatch(err => {
            res.status(500).json({
                message: "The post information could not be retrieved",
                err: err.message,
                stack: err.stack,
            })
        })


})

router.get('/:id', async (req, res) => {
    try {

    }
    caches( err ) {

    }

})

router.post('/', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.get('/:id/message', (req, res) => {

})








module.exports = router