const express=require('express');
const router = express.Router();

router.post('/add', (req, res) => {
    try {
      const { num1, num2, operator } = req.body;
      const result = Number(num1) + Number(num2);
      res.json({ num1, operator, num2, result });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred.' });
    }
  });
  
  router.post('/sub', (req, res) => {
    try {
      const { num1, num2, operator } = req.body;
      const result = Number(num1) - Number(num2);
      res.json({ num1, operator, num2, result });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred.' });
    }
  });
  
  module.exports = router;
  