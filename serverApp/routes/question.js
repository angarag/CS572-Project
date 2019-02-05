const express = require('express');

const QuestionService = require('../services/question');

const questionRouter = express.Router();

const questionService = new QuestionService();

questionRouter.get('/', function (req, res, next) {
  questionService.get({}).subscribe(
    (questions) => res.status(200).json(questions),
    (err) => next(err),
    null
  );

});

questionRouter.post('/', function (req, res, next) {
  questionService.add(req.body)
    .then(() => res.status(200).json({
      success: true
    }))
    .catch((err) => next(err));
});

questionRouter.patch('/:id', (req, res, next) => {

});

module.exports = questionRouter;