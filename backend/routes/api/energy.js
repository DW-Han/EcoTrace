const express = require("express");
const router = express.Router();

// Load EnergyData model
const EnergyData = require("../../models/EnergyData");

// @route GET api/energy/test
// @description tests energy data route
// @access Public
router.get("/test", (req, res) => res.send("Energy data route testing!"));

// @route GET api/energy
// @description Get all energy data
// @access Public
router.get("/", (req, res) => {
  EnergyData.find()
    .then((data) => {
      res.setHeader("Content-Type", "application/json"); // Ensure JSON content type
      res.json(data);
    })
    .catch((err) => {
      res.status(404).json({ noenergydatafound: "No energy data found" });
    });
});

// @route GET api/energy/:id
// @description Get single energy data entry by ID
// @access Public
router.get("/:id", (req, res) => {
  EnergyData.findById(req.params.id)
    .then((data) => {
      res.setHeader("Content-Type", "application/json"); // Ensure JSON content type
      res.json(data);
    })
    .catch((err) => {
      res.status(404).json({ noentryfound: "No entry found" });
    });
});

// @route POST api/energy
// @description Add/save energy data entry
// @access Public
router.post("/", (req, res) => {
  EnergyData.create(req.body)
    .then((data) => {
      res.setHeader("Content-Type", "application/json"); // Ensure JSON content type
      res.json({ msg: "Energy data entry added successfully", data });
    })
    .catch((err) => {
      res.status(400).json({ error: "Unable to add this energy data entry" });
      console.error(err);
    });
});

// @route PUT api/energy/:id
// @description Update energy data entry by ID
// @access Public
router.put("/:id", (req, res) => {
  EnergyData.findByIdAndUpdate(req.params.id, req.body, { new: true }) // `new: true` returns the updated document
    .then((data) => {
      res.setHeader("Content-Type", "application/json"); // Ensure JSON content type
      res.json({ msg: "Energy data entry updated successfully", data });
    })
    .catch((err) => {
      res.status(400).json({ error: "Unable to update the database" });
      console.error(err);
    });
});

// @route DELETE api/energy/:id
// @description Delete energy data entry by ID
// @access Public
router.delete("/:id", (req, res) => {
  EnergyData.findByIdAndDelete(req.params.id)
    .then((data) => {
      res.setHeader("Content-Type", "application/json"); // Ensure JSON content type
      res.json({ msg: "Energy data entry deleted successfully", data });
    })
    .catch((err) => {
      res.status(404).json({ error: "No such entry found" });
      console.error(err);
    });
});

module.exports = router;
