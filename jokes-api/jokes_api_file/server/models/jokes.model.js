const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Joke is required"],
        minlenght : [10, "Joke must be at least 10 characters"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlenght : [3, "Punchline must be at least 3 characters"]
    },
}, {timestamps: true});

const Jokes = mongoose.model('Jokes', JokeSchema);
module.exports = Jokes;
