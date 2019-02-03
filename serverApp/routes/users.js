var express = require('express');
var router = express.Router();
const Test = require('./../model/test.model')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/test', (req, res) => {
  const result = {
    name: req.body.name,
    address: req.body.address,
    date: Date.now
  }
  const test = new Test(result);
  test.save()
    .then(result => {
      return res.json({data:result})
    })
    .catch(error => {
      return res.json({error: error})
    })
})

module.exports = router;
