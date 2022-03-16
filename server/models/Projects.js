const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    visible: {
      type: Boolean,
    },
    hits: Boolean,
    new: Boolean,
    sale: Boolean,
    price: Number,
    date: {
      type: String,
      required: true,
    },
    free: Boolean,
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Projects", schema);
