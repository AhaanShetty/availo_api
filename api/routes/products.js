const express = require('express');

const router = express.Router();



router.get('/:name', (req, res) => {
  res.status(200).json({
    message: "You are at products",
    name: req.params.name
  });
});

router.get('/', (req, res) => {
  res.status(200).json({
    message: "You are at products"
  })
});




module.exports = router;
