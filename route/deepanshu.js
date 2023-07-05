const express = require("express");
const router = express.Router();

router.post("/multiply", (req, res) => {
  try {
    const { num1, num2, operator } = req.body;
    const result = Number(num1) * Number(num2);
    res.json({ num1, operator, num2, result });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while performing multiplication." });
  }
});

router.post("/divide", (req, res) => {
  try {
    const { num1, num2, operator } = req.body;
    const result = Number(num1) / Number(num2);
    res.json({ num1, operator, num2, result });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while performing division." });
    console.log("Error ")
  }
});

module.exports = router;

