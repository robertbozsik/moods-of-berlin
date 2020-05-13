const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const placeSchema = new Schema(
  {
    title: String,
    description: String,
    mood: ["joy", "sadness", "anger"], // task: define the moods
    img: String,
    address: String,
    review: [String],
    // owner: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Place = model("Place", placeSchema);

module.exports = Place;
