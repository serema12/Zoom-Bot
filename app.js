const express = require('express')
const app = express();
//real time socket-io
const io = require('socket.io')(server)

app.set('view engine', 'ejs')
// use static files: images,css files,js files
app.use(express.static('public'))


module.exports = app