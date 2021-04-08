const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', (req, res) => {
  // console.log(req.body);
  const query = req.body.query;
  if (query) {
    const API_KEY = process.env.API_KEY;
    const query_url = `http://api.wolframalpha.com/v1/spoken?appid=${API_KEY}&i=${query}`;
    axios.get(query_url).then((response) => {
      // console.log(response.data);
      res.status(200).json({ answer: response.data });
    });
  }
});

router.get('/', (request, response) => {
  response.send('<h1>Welcome to the API page.</h1><p>Yes, this page is useless</p>');
});

module.exports = router;
