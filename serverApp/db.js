require('dotenv').config();

const mongoose = require('mongoose');

class DB {

    constructor() {
        mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true })
            .then(() => {
                console.log('connected to database')
            })
            .catch(() => {
                console.log('connection to db failed')
            });
    }

    checkJWT(){
        return true;
    }

    createJWT(){

    }
}
module.exports = new DB();

