const express = require("express");
const router = express.Router();
const Place = require("../models/Place");

// create a place
router.post("/", (req, res) => {
  //   const title = req.body.title;
  //   const description = req.body.description;
  //   const mood = req.body.mood;
  //   const imgPath = req.body.imgPath;
  //   const street = req.body.street;
  //   const zip = req.body.zip;
  //   const city = req.body.city;
  //   const review = req.body.review;
  const {
    title,
    description,
    mood,
    imgPath,
    street,
    zip,
    city,
    review,
  } = req.body;

  Place.create({
    title,
    description,
    mood,
    imgPath,
    street,
    zip,
    city,
    review,
  })
    .then((place) => {
      res.status(201).json(place);
    })
    .catch((err) => {
      res.json(err);
    });
});

// return all the places
router.get("/", (req, res) => {
  Place.find()
    .then((places) => {
      res.status(200).json(places);
    })
    .catch((err) => {
      res.json(err);
    });
});

// return the specified place

module.exports = router;
