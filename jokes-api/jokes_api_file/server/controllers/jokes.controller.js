const { response } = require('express');
const Jokes = require('../models/jokes.model');


module.exports.getAllJokes = (req, res) => {
    Jokes.find()
        .then(response => res.json(response))
        .catch(err => res.json(err))
};

module.exports.getOne = (req, res) => {
    Jokes.findOne({ _id: req.params.id })
        .then(response => res.json(response))
        .catch(err => res.json(err))
};

module.exports.addJoke = (req, res) => {
    Jokes.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.json(err))
};


module.exports.updateJoke = (req, res) => {
    Jokes.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(response => res.json(response))
        .catch(err => res.json(err))
};

module.exports.deleteJoke = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id })
        .then(response => res.json(response))
        .catch(err => res.json(err))
};
