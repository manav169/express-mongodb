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
});
// Get All Method
router.get("/getAll", async (req, res) => {
  
    try {
        const data = await Model.find();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// Get by Id Method
router.get("/getOne/:id", async (req, res) => {

    try {
        const data = await Model.findById(req.params.id);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// Update by Id Method
router.put("/update/:id", async (req, res) => {

    try {
        const id = req.params.id;
        const updateData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(id, updateData, options);

        res.send(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update by Id Method
router.put("/delete/:id", async (req, res) => {

    try {
        const id = req.params.id;
    
        const data = await Model.findByIdAndDelete(id);

        res.send(`Document with ${data.name} has been deleted..`);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;