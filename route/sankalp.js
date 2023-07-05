const express = require('express');
const router = express.Router();

router.post('/percent', (req, res) => {
  try {
    const { num1, num2, operator } = req.body;
    const result = (Number(num1) / Number(num2)) * 100;
    res.json({ num1, operator, num2, result });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/pow', (req, res) => {
  try {
    const { num1, num2, operator } = req.body;
    const result = Math.pow(Number(num1), Number(num2));
    res.json({ num1, operator, num2, result });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
