// BACKEND FOR PROCESSING API KEY
const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json("hi");
});

app.get("/cards", (req, res) => {
  const options = {
    method: "GET",
    url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/battlegrounds",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(8000, () => console.log(`backend is running on ${PORT}`));
