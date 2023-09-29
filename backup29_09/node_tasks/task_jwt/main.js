const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    id: {
        type: String,
    },
    userName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        require: true,
    }, 
    token:{
        type: String,
        require: true,
    }

});

const ChatHistory = mongoose.model('users_token', chatSchema);

module.exports = ChatHistory;

