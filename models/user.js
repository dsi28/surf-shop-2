const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    image: String
});

module.exports = mongoose.model('User', UserSchema);