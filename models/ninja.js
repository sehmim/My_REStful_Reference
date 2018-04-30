const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// CREATE SCHEMA AND MODEL
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name Frield is Required']
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
})

// CREATE MODEL
const Ninja = mongoose.model('ninja', NinjaSchema);

// Export it
module.exports = Ninja;