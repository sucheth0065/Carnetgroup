const mongoose = require("mongoose");

const inputSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
  },
  stylePreference: {
    type: String,
    required: true,
  },
  budget: {
    type: String,
    required: true,
  },
  additionalComments: {
    type: String,
  },
});

const UserForm = mongoose.model("UserForm", inputSchema);

module.exports = UserForm;
