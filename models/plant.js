const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true }
});

module.exports = mongoose.model("Plant", PlantSchema);