var express = require('express');
var router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Question = require('../model/question');

/* GET users listing. */
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
router.post("/addquestion", function(req, res, next) {
  const question = new Question({
  category: req.body.category,
  active: true,
  question: req.body.question,
  created_at: Date.now(),
  updated_at: Date.now()
  });

  question
    .save()
    .then(result => {
      res.status(201).json({
        message: "Question created!",
        result: result
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
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

router.get("/displayquestion", function(req, res, next) {
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

router.post("/updatequestion", function(req, res, next) {
  active = !req.body.active;
  console.log(active);
  Question.findOneAndUpdate(
    {_id: req.body._id},
    {$set: {'active': active}},
    (err, result) => {
      console.log(result.category);
      return res.status(200).json({
        data: result
    })
  });      
});

module.exports = router;
