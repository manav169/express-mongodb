const express = require("express");
const Model = require("../models/model");
const router = express.Router();

// Post Method
router.post("/course", async (req, res) => {
  const data = new Model({
    cName: req.body.cName,
    durationInYears: req.body.durationInYears,
    studentCount: req.body.studentCount,
  });

  try {
    const dataToSave = await data.save();
    res.json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
