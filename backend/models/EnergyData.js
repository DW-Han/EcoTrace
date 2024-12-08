const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  date: { type: Date, required: true, unique: true },
  energyUsage: { type: Number, required: true },
  carbonFootprint: { type: Number, required: true },
});

module.exports = mongoose.model("EnergyData", DataSchema);
