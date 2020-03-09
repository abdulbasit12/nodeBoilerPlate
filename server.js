const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// mongoose.connect('', { useNewUrlParser: true, useCreateIndex: true });
// let db = mongoose.connection;

// //Check connection
// db.once('open', function () {
//     console.log('DB connected');
// })

// //Check for DB errors
// db.on('error', function (err) {
//     console.log(err);
// })

// Init App
const app = express();

//CORS Enabled
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
// parse application/json
app.use(bodyParser.json({ limit: '10mb', extended: true }));
//public folder
app.use('/public', express.static('public'));


//Runing Port
app.listen(process.env.PORT || 9000, function () {
    console.log('its port 9000');
})