const express = require('express');
const router = express.Router();
const Student = require('../model/student.model');
const nodemailer = require('nodemailer')
const email={
    username:'mars@mars.com',
    password:'secret'
}
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
router.get('/invite/:email', (req, res) => {
    
    let student_email = req.params.email
    console.log('sending email to: '+student_email);
    //sendInvitations(student_email);
    return res.json({
        data:student_email
    })
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
    if(token){
        console.log('updating student')
        Student.findOneAndUpdate(
            {email: email, 'invitation.token':token},
            {$set: 
                {
                    'firstName': firstName,
                    'lastName': lastName,
                    'invitation.status':status,
                     'invitation.valid': valid
                    }
            },
            )
            .then(result=>{
              console.log(result.firstName);
              return res.status(200).json({
                data: result
              })
                })
            .catch((error)=>{
              return res.json({ error: error })
            })  
    
    }
    else{
        console.log('creating student')
        const studentObject = {
            firstName: "_",
            lastName: "_",
            email: email,
            entry: entry,
            invitation:{
                token: '_',
                status: 'sent',
                valid: true
            }
        }
        const stu = new Student(studentObject);
        stu.save()
            .then(result => {
                return res.json({ result: result })
            })
            .catch(error => {
                return res.json({ error: error })
            })
    }
})

router.get("/getByEmail/:email", function(req, res, next) {
    const email = req.params.email;
    console.log(email);
    Student.findOne(
      {email: email})
      .then(result=>{
        console.log(result.firstName);
        return res.status(200).json({
          data: result
        })
          })
      .catch((error)=>{
        return res.json({ error: error })
      })  
});
router.get("/getByInvitationStatus/:istatus", function(req, res, next) {
    const status = req.params.istatus;
    console.log('find by status:'+status);
    Student.find(
      {'invitation.status': status})
      .then(result=>{
        return res.status(200).json({
          data: result
        })
          })
      .catch((error)=>{
        return res.json({ error: error })
      })  
});

function sendInvitations(to_whom){ 
    console.log('sending invitation email(s)')
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: email.username,
          pass: email.password
        }
      });
      
      var mailOptions = {
        from: email.username,
        to: to_whom,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}
module.exports = router;
