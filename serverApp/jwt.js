'use strict';
const fs = require('fs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const config = require('./keys')

// PAYLOAD
var payload = {
    data1: "Data 1",
    data2: "Data 2",
    data3: "Data 3",
    data4: "Data 4",
};
// PRIVATE and PUBLIC key
/*
var publicKEY=fs.readFileSync(process.env.PUBLIC_KEY_PATH, 'utf8');
var privateKEY= fs.readFileSync(process.env.PRIVATE_KEY_PATH, 'utf8');
if (!publicKEY)
    publicKEY = `
   MDwwDQYJKoZIhvcNAQEBBQADKwAwKAIhAJp3MZ1dYxtXxycrx0Qn9p9VbB0Ir2FH
5FgXFY5AghcjAgMBAAE=
   `;
if (!privateKEY)
    privateKEY = `
    -----BEGIN OPENSSH PRIVATE KEY-----
   MIGqAgEAAiEAmncxnV1jG1fHJyvHRCf2n1VsHQivYUfkWBcVjkCCFyMCAwEAAQIg
Ivx0ZGxOklbjaN/llm5m0X1u+NAJgs+h4Vj/QxQr32ECEQDdopAdOKDtD9leUbVy
XJ5vAhEAsmpznqT9l8zSJJOgLdhsjQIRALKrOkJURGbXQAQpGnz27UECEG42XB3Q
BedT2yxFFVm8q7ECEHUTGPRoiDaW2Y/rCn8tYzI=
-----END OPENSSH PRIVATE KEY-----
   `*/
var i = 'Mysoft corp';          // Issuer 
var s = 'some@user.com';        // Subject 
var a = 'http://mysoftcorp.in'; // Audience
// SIGNING OPTIONS
var signOptions = {
    // issuer: i,
    // subject: s,
    // audience: a,
    expiresIn: "12h",
    //algorithm: "RS256"
};

var token = jwt.sign(payload, config.pk, signOptions);
var legit = jwt.verify(token, config.pk, signOptions);
console.log("\nJWT verification result: " + JSON.stringify(legit));
console.log("Token - " + token)