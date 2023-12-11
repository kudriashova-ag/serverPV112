const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    comments: [{comment: String, date: Date}]
});

module.exports = mongoose.model('Post', schema);