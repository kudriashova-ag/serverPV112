const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: {type: Date, default: new Date()}
});

schema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model('User', schema);