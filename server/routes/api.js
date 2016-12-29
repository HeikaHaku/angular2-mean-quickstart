const express = require('express');
const router = express.Router();

User = require('../models/user.js');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    if (err) throw err;
    if(!users.length)
      res.sendFile('../static/404.html');
    else
      res.send(users);
  });
});

module.exports = router;
