const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  medicineid: {
    type: String,
    required: true,
  },
  medicinename: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("request", requestSchema);
