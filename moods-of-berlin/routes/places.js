const express = require("express");
const router = express.Router();
const Place = require("../models/Place");

router.post("/", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const mood = req.body.mood;
  const imgPath = req.body.imgPath;
  const address = req.body.address;
  const review = req.body.review;

  Place.create({
    title,
    description,
    mood,
    imgPath,
    address,
    review,
  })
    .then((place) => {
      res.status(201).json(place);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
