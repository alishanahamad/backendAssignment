const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDetailSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    contact: {
        type: Number,
        require: true
    }
}, {
    timestamps: true
});

let UserDetail = mongoose.model('userDetail', userDetailSchema);
module.exports = UserDetail;