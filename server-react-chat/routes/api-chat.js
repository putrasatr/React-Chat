var express = require('express');
var router = express.Router();
const Chat = require('../models/chat')
/* GET home page. */

router.post('/message', async (req, res, next) => {
    try {
        let created_date = Date.now()
        var { id, sender, message } = req.body;
        const data = await Chat.create({ id, sender, message, created_date })
        res.status(201).json({
            success: true,
            message: "message have been added",
            data
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
});

router.get('/message', function (req, res, next) {
    Chat.find(
        {}).exec(function (err, data) {
            res.status(200).json({
                data
            })
        })
})

router.delete('/message/:id', function (req, res, next) {
    var { id } = req.params
    Chat.find({ id }, (err, data) => {
        Chat.findByIdAndDelete(data[0]._id, (err, data) => {
            res.status(201).json({
                success: true,
                message: "message have been deleted",
                data: data
            })
        })
    })


})

module.exports = router;