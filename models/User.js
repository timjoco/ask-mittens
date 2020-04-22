const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    googleId: String,
    username: String
});

mongoose.model('users', userSchema);