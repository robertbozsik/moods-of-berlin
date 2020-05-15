const defaultPlaces = [
  {
    title: "Bouldergarten",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    mood: "energetic",
    imgPath: "https://picsum.photos/300/300?random=1",
    street: "",
    zip: "",
    city: "Berlin",
    review: [],
  },
  {
    title: "Tiergarten",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    mood: "relaxed",
    imgPath: "https://picsum.photos/300/300?random=2",
    street: "",
    zip: "",
    city: "Berlin",
    review: [],
  },
  {
    title: "Viktoria Park",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    mood: "relaxed",
    imgPath: "https://picsum.photos/300/300?random=3",
    street: "",
    zip: "",
    city: "Berlin",
    review: [],
  },
  {
    title: "Teufelssee",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    mood: "thoughtful",
    imgPath: "https://picsum.photos/300/300?random=4",
    street: "",
    zip: "",
    city: "Berlin",
    review: [],
  },
  {
    title: "Tempelhofer Feld",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    mood: "thoughtful",
    imgPath: "https://picsum.photos/300/300?random=5",
    street: "",
    zip: "",
    city: "Berlin",
    review: [],
  },
  {
    title: "Sammlung Boros",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    mood: "thoughtful",
    imgPath: "https://picsum.photos/300/300?random=6",
    street: "",
    zip: "",
    city: "Berlin",
    review: [],
  },
  {
    title: "Admiralbrücke",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    mood: "bored",
    imgPath: "https://picsum.photos/300/300?random=7",
    street: "",
    zip: "",
    city: "Berlin",
    review: [],
  },
  {
    title: "Hasenheide",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    mood: "joyful",
    imgPath: "https://picsum.photos/300/300?random=8",
    street: "",
    zip: "",
    city: "Berlin",
    review: [],
  },
  {
    title: "Berghain",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    mood: "angry",
    imgPath: "https://picsum.photos/300/300?random=9",
    street: "",
    zip: "",
    city: "Berlin",
    review: [],
  },
  {
    title: "Kampfsport Akademie Berlin",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    mood: "angry",
    imgPath: "https://picsum.photos/300/300?random=10",
    street: "",
    zip: "",
    city: "Berlin",
    review: [],
  },
  {
    title: "Zeiss-Großplanetarium",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    mood: "anxious",
    imgPath: "https://picsum.photos/300/300?random=11",
    street: "",
    zip: "",
    city: "Berlin",
    review: [],
  },
  {
    title: "Radialsystem",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    mood: "bored",
    imgPath: "https://picsum.photos/300/300?random=12",
    street: "",
    zip: "",
    city: "Berlin",
    review: [],
  },
  {
    title: "Botanischer Garten",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    mood: "melancholic",
    imgPath: "https://picsum.photos/300/300?random=13",
    street: "Königin-Luise-Straße 6-8",
    zip: "14195",
    city: "Berlin",
    review: [],
  },
  {
    title: "Wilhelm-Foerster-Sternwarte",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    mood: "angry",
    imgPath: "https://picsum.photos/300/300?random=14",
    street: "Munsterdamm 90",
    zip: "12169",
    city: "Berlin",
    review: [],
  },
  {
    title: "Calisthenics Ground in Volkspark Wilmersdorf",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    mood: "energetic",
    imgPath: "https://picsum.photos/300/300?random=15",
    street: "Am Volkspark 53",
    zip: "10715",
    city: "Berlin",
    review: [],
  },
  {
    title: "Schlossgarten Charlottenburg",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    mood: "melancholic",
    imgPath: "https://picsum.photos/300/300?random=16",
    street: "Spandauer Damm 10-22",
    zip: "14059",
    city: "Berlin",
    review: [],
  },
  {
    title: "Mauerpark Flohmarkt",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    mood: "bored",
    imgPath: "https://picsum.photos/300/300?random=17",
    street: "Bernauer Str. 63-64",
    zip: "13355",
    city: "Berlin",
    review: [],
  },
  {
    title: "Spandauer Zitadelle",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    mood: "anxious",
    imgPath: "https://picsum.photos/300/300?random=18",
    street: "Am Juliusturm 64",
    zip: "13599",
    city: "Berlin",
    review: [],
  },
  {
    title: "Spreepark Plänterwald",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    mood: "melancholic",
    imgPath: "https://picsum.photos/300/300?random=19",
    street: "Kiehnwerderallee 1-3",
    zip: "12437",
    city: "Berlin",
    review: [],
  },
  {
    title: "Oberbaumbrücke",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    mood: "relaxed",
    imgPath: "https://picsum.photos/300/300?random=20",
    street: "Oberbaumbrücke",
    zip: "10243",
    city: "Berlin",
    review: [],
  },
  {
    title: "Kunstquartier Bethanien",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    mood: "anxious",
    imgPath: "https://picsum.photos/300/300?random=21",
    street: "Mariannenpl. 2",
    zip: "10997",
    city: "Berlin",
    review: [],
  },
  {
    title: "Freiluftkino Hasenheide",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    mood: "joyful",
    imgPath: "https://picsum.photos/300/300?random=22",
    street: "Hasenheide",
    zip: "10967",
    city: "Berlin",
    review: [],
  },
  {
    title: "Jazz Konzert im Körnerpark",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    mood: "joyful",
    imgPath: "https://picsum.photos/300/300?random=23",
    street: "Schierker Str. 8",
    zip: "12051",
    city: "Berlin",
    review: [],
  },
  {
    title: "Skywalk, Marzahn",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    mood: "energetic",
    imgPath: "https://picsum.photos/300/300?random=24",
    street: "Raoul-Wallenberg-Straße 42",
    zip: "12679",
    city: "Berlin",
    review: [],
  },
];

const mongoose = require("mongoose");
const Place = require("../models/Place.js");

mongoose
  .connect("mongodb://localhost/moods-of-berlin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo from the seed file! Database name: "${x.connections[0].name}"`
    );

    Place.create(defaultPlaces, (error, places) => {
      if (error) {
        return handleError(error);
      }
      console.log("default places created: ", places);
      x.connections[0].close();
    });
  })
  .catch((error) => {
    console.error("Error connecting to mongo", error);
  });
