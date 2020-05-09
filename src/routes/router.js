const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  await res.status(200).send('Server running');
});

module.exports = router;
