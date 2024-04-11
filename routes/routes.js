const express = require("express");
const Model = require("../models/model");
const router = express.Router();

// Post Method
router.post("/post", async (req, res) => {
    const data = new Model({
        name: req.body.name,
        brand: req.body.brand,
        quantity: req.body.quantity,
    });

    try {
        const dataToSave = await data.save();
        res.json(dataToSave);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
})

module.exports = router;