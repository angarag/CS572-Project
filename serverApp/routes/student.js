const express = require('express');
const router = express.Router();
const Student = require('../model/student.model');
const nodemailer = require('nodemailer')
require('dotenv').config()
const email = {
    username: process.env.MAIL_USER_EMAIL,
    password: process.env.MAIL_USER_PASSWORD
}
const bcrypt = require('bcrypt');
const saltRounds = 7;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

router.get("/getAll", function (req, res, next) {
    console.log('in /api/students route')

    Student.find({})
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

router.get("/getAll/:id", function (req, res, next) {

    Student.findOne({_id: req.params.id})
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

router.post("/updatestudent", function(req, res, next) {
    
    Student.findOneAndUpdate(
      {_id: req.body._id},
      {$set: {'result': req.body.result}},
      (err, result) => {
        console.log(result.category);
        return res.status(200).json({
          data: result
      })
    });      
  });

router.post('/upsert', (req, res) => {
    const {
        firstName,
        lastName,
        email,
        entry,
        token,
        status,
        valid
    } = req.body;
    console.log(req.body)
    if (token) {
        console.log('updating student')
        Student.findOneAndUpdate(
            { email: email, 'invitation.token': token },
            {
                $set:
                {
                    'firstName': firstName,
                    'lastName': lastName,
                    'invitation.status': status,
                    'invitation.valid': valid
                }
            },
        )
            .then(result => {
                console.log(result.firstName);
                return res.status(200).json({
                    data: result
                })
            })
            .catch((error) => {
                return res.json({ error: error })
            })

    }
    else {
        helper_createStudent(email, entry, res);

    }
})

router.get("/getByEmail/:email", function (req, res, next) {
    const email = req.params.email;
    console.log(email);
    Student.findOne(
        { email: email })
        .then(result => {
            console.log(result.firstName);
            return res.status(200).json({
                data: result
            })
        })
        .catch((error) => {
            return res.json({ error: error })
        })
});
router.get("/getByInvitationStatus/:istatus", function (req, res, next) {
    const status = req.params.istatus;
    console.log('find by status:' + status);
    Student.find(
        { 'invitation.status': status })
        .then(result => {
            return res.status(200).json({
                data: result
            })
        })
        .catch((error) => {
            return res.json({ error: error })
        })
});

router.get('/invite/:email', (req, res) => {

    let student_email = req.params.email
    console.log('sending email to: ' + student_email);
    sendInvitations(student_email, res);
});

router.get('/validateToken', (req, res) => {
    const token =  req.query.token;
    console.log('Token:'+token)
    Student.findOne(
        { 'invitation.token': token })
        .then(result => {
            return res.status(200).json({
                data: result
            })
        })
        .catch((error) => {
            return res.json({ error: error })
        })
});

router.post('/updateToken', (req, res) => {
    const {
        token,
        status,
        date
    } = req.body;
    Student.findOneAndUpdate(
        { 'invitation.token': token },
        {
            $set:
            {
                'invitation.status': status,
                'invitation.expireDate': date
            }
        })
        .then(result => {
            return res.status(200).json({
                data: result
            })
        })
        .catch((error) => {
            return res.json({ error: error })
        })
});


router.post('/saveQuestionAnswersWithInvitationToken', (req, res) => {
    const {
        token,
        q1a,
        q2a,
        q3a,
        status,
        q1,
        q2,
        q3,
        firstName,
        lastName
    } = req.body;
    console.log(q1a,q2a,q3a)
    Student.findOneAndUpdate(
        { 'invitation.token': token },
        {
            $set:
            {
                'questions.0.snapshots': q1a,
                'questions.1.snapshots': q2a,
                'questions.2.snapshots': q3a,
                'invitation.status': status,
                'questions.0.question':q1,
                'questions.1.question':q2,
                'questions.2.question':q3,
                'questions.0.answer':q1a[q1a.length-1],
                'questions.1.answer':q2a[q2a.length-1],
                'questions.2.answer':q3a[q3a.length-1],
                'firstName':firstName,
                'lastName':lastName
            }
        })
        .then(result => {
            return res.status(200).json({
                data: result
            })
        })
        .catch((error) => {
            return res.json({ error: error })
        })

});
function sendInvitations(to_whom, res) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: email.username,
            pass: email.password
        }
    });
    bcrypt.hash(to_whom, saltRounds, function (err, hash) {
        // Store hash in your password DB.
        console.log('Token for new student:' + hash)


        var mailOptions = {
            from: email.username,
            to: to_whom,
            subject: 'Welcome to University A',
            html: `<h1>That was easy!</h1>
        <a href="http://localhost:4200/student/token?token=${hash}">
        Click me to take exam
        </a>
        `
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log('error occured when sending email')
                console.log(error);
                return res.status(200).json({
                    data: false
                })
            } else {
                console.log('Email sent: ' + info.response);
                let help_obj = {
                    email: to_whom,
                    hash: hash,
                    entry: undefined,
                    res: res
                }
                helper_createStudent(help_obj);
            }
        });
    });
}
function helper_createStudent(help_obj) {
    const {
        email,
        hash,
        entry,
        res
    } = help_obj;
    console.log('Token:', hash)
    console.log('creating student')
    // Store hash in your password DB.
    const studentObject = {
        firstName: "_",
        lastName: "_",
        email: email,
        entry: (entry === undefined) ? 'Feb/2019' : entry,
        invitation: {
            token: hash,
            status: 'sent',
            valid: true,
            expireDate: null
        },
        result:false,
        published:false
    }
    const stu = new Student(studentObject);
    stu.save()
        .then(result => {
            return res.json({ data: result })
        })
        .catch(error => {
            return res.json({ data: error })
        })
}
bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
    // Store hash in your password DB.
    console.log(hash)
    bcrypt.compare(myPlaintextPassword, hash, function (err, res) {
        if (res)
            console.log(true)
    });
});

module.exports = router;
