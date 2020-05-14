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

router.get("/:id", (req, res) => {
  // check if req.params.id is valid, if not respond with a 4xx status code
  Place.findById(req.params.id)

    .then((place) => {
      if (!place) {
        res.status(404).json(place);
      } else {
        res.json(place);
      }
    })
    .catch((err) => {
      res.json(err);
    });
});

// edit the specified place

router.put("/:id", (req, res) => {
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

  Place.findByIdAndUpdate(
    req.params.id,
    { title, description, mood, imgPath, street, zip, city, review },
    // { new: true } ensures that we are getting the updated document in the .then callback
    { new: true }
  )
    .then((place) => {
      res.status(200).json(place);
    })
    .catch((err) => {
      res.json(err);
    });
});

// delete the specified place

router.delete("/:id", (req, res) => {
  // delete the place
  Place.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: "ok" });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
