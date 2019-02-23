const express = require('express');
const router = express.Router();
const bananaService = require('../service/banana.service');

router.post('/budget', (req, res) => {

  const response = bananaService.budget(req.body.startDate, req.body.numberOfDays);
  res.json(response);

});

module.exports = router;