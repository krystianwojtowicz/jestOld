const express = require('express');

const router = express.Router();
const movieData = require('../data/movies.json')

router.get('/', (req, res) => {
res.json(movieData)
});

module.exports = router;