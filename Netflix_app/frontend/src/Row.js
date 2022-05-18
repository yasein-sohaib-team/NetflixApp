import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./Requests";
import "./Row.css"


function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img src={`${requests.fetchImageBaseURL}${movie.poster_path}`} alt={movie.name} className="row_poster"/>
        ))}
      </div>
    </div>
  );
}

export default Row;
