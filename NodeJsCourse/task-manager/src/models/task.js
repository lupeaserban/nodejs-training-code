const mongoose = require('mongoose');
const validator = require('validator');


const Task = mongoose.model('tasks', {
    description: {
        type: String,
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        trim: true,
        default: false
    },
    owner : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

module.exports = Task;
