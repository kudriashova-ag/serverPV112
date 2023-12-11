const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kudriashovaag:web007Pass@cluster0.ab16ifu.mongodb.net/?retryWrites=true&w=majority')
module.exports = mongoose.connection;