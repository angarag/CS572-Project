const express = require('express');
const router = express.Router();
const Question = require('../model/question');

router.get("/", function (req, res, next) {

Question.find({})
        .then(result => {
            return res.status(200).json({
                data: result
            });
        })
        .catch(error => {
            return res.status(500).json({
                error: error
            });
        });

});


module.exports = router;