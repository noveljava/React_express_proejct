const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json({dat:'this is index.'}));

module.exports = router
