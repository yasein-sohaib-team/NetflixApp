"use strict";

const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const port = 5000;

const moviesData = require("./movie_data/data.json");
const url = "postgres://yaseinburqan:6437@localhost:5432/moviedatabase";
const bodyParser = require("body-parser");

const { Client } = require("pg");
const client = new Client(url);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();

app.use(cors());

const apiKey = "218da8bf22c684d6bae14c5df2c30224";

function MoviesLibrary(title, posterPath, overview) {
  this.title = title;
  this.posterPath = posterPath;
  this.overview = overview;
}

// end points handling functions

function homeHandler(req, res) {
  // let sql = "SELECT * from movie;";
  // client
  //   .query(sql)
  //   .then((result) => {
  //     return res.status(200).json(result.rows);
  //   })
  //   .catch((err) => {
  //     errorHandler(err, req, res);
  //   });
  res.send("server route is working");
}

// function favoriteHandler(req, res) {
//   return res.status(200).send("Favorite Page");
// }

// function addMovieHandler(req, res) {
//   const { name, time, summary, image } = req.body;

//   let sql = "INSERT INTO movie(name,time,summary,image ) VALUES($1, $2, $3, $4) RETURNING *;"; // sql query
//   let values = [name, time, summary, image];
//   client
//     .query(sql, values)
//     .then((result) => {
//       return res.status(201).json(result.rows[0]);
//     })
//     .catch();
// res.send("server route is working");
// }

// function updateMovieHandler(req, res) {
//   const { name, time, summary, image } = req.body;

//   let sql = "INSERT INTO movie(name,time,summary,image ) VALUES($1, $2, $3, $4) RETURNING *;"; // sql query
//   let values = [name, time, summary, image];
//   client
//     .query(sql, values)
//     .then((result) => {
//       return res.status(201).json(result.rows[0]);
//     })
//     .catch();
// res.send("server route is working");
// }

// function trendingPageHandler(req, res) {
//   let trendingMovies = [];
//   axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`).then((value) => {
//     value.data.results.forEach((movie) => {
//       movie = new MoviesLibrary(movie.title, movie.poster_path, movie.overview);
//       trendingMovies.push(movie);
//     });
//     return res.status(200).json(trendingMovies);
//   });
// res.send("server route is working");
// }

// function getMovieByIdHandler(req, res) {
//   let id = req.params.id;
//   let sql = `SELECT * FROM movie WHERE id=${id};`;
//   client.query(sql).then((result) => {
//     res.status(200).json(result.rows);
//   });
// res.send("server route is working");
// }

// function deleteMovieHandler(req, res) {
//   const { id } = req.params;
//   console.log(id);
//   const sql = `DELETE  FROM movie WHERE id=${id};`;
//   client.query(sql).then(() => {
//     return res.status(204).json([]);
//   });
// res.send("server route is working");
// }

function errorHandler(req, res) {
  return res.status(404).send("page not found");
  res.send("server route is working");
}

// end points
app.get("/", homeHandler);
// app.get("/favorite", favoriteHandler);
// app.post("/addMovie", addMovieHandler);
// app.put("/update-movie/:id", updateMovieHandler);
// app.get("/trending", trendingPageHandler);
// app.get("/getMovieById/:id", getMovieByIdHandler);
// app.delete("/delete/:id", deleteMovieHandler);
app.get("*", errorHandler);

// after connection to db, start the server
client.connect().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening ${port}`);
  });
});
