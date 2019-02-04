const express = require('express');
const router = express.Router();

const students = require('../model/student');

/** GET Car deal detail */
router.get('/:_id', (req, res) => {
    students.findOne({
        _id: req.params._id
    }, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    })
});

module.exports = students;
