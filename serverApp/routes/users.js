var express = require('express');
var router = express.Router();
const User = require('./../model/user.model')

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

router.post('/signup', (req, res) => {
  const userObject = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    role: 'admissionStaff',
    isActive: true
  }
  const user = new User(userObject);
  user.save()
    .then(result => {
      return res.json({result:result})
    })
    .catch(error => {
      return res.json({error: error})
    })
})

router.post('/login', (req, res) => {
  User.findOne({ email: req.body.email, password: req.body.password })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
    return res.json ({message: 'successful'})
  })
})

router.get("/users", function(req, res, next) {
  User.find({})
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

router.post("/users", function(req, res, next) {
  isActive = !req.body.isActive;
  console.log(isActive);
  User.findOneAndUpdate(
    {_id: req.body._id},
    {$set: {'isActive': isActive}},
    (err, result) => {
      console.log(result.firstName);
      return res.status(200).json({
        data: result
    })
  });      
});

module.exports = router;
