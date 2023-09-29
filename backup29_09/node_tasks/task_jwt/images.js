const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    image: {
        type: String,
    }
})
const FileHistory = mongoose.model('image_files', fileSchema);
module.exports = FileHistory;