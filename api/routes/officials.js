const express = require('express');

const router = express.Router();

router.get('/:name', (req, res) => {
  res.status(200).json({
    message: "You are at the officials page",
    name: req.params.name,
    timestamp: new Date()
  })
})

router.get('/', (req, res) => {
  res.status(200).json({
    message: "You are at the officials page"
  })
})

module.exports = router;
