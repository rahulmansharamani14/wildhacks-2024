const express = require("express");
const router = express.Router();

router.get('/payment', function(req, res) {
    res.render('pages/payment');
  });

  router.get('/thankyou', function(req, res) {
    res.render('pages/thankyou');
  });

module.exports = router;