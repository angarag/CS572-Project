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

Question.post("/question", function(req, res, next) {
    Active =req.body.Active;
    console.log(Active);
    User.findOneAndUpdate(
      {_id: req.body._id},
      {$set: {'Active': Active}},
      (err, result) => {
        console.log(result.firstName);
        return res.status(200).json({
          data: result
      })
    });      
  });

module.exports = router;