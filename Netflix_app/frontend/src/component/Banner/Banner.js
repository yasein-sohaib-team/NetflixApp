import React, { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.result[Math.floor(Math.random() * request.data.results.length - 1)]);
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${requests.fetchImageBaseURL}${movie?.backdrop_path})`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_contents">
          <h1>{movie?.title || movie?.name | movie?.original_name}</h1>
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>

          <div className="banner_buttons">
            <button className="banner_buttons"></button>
          </div>
          <div className="banner_buttons">
            <button className="banner_buttons"></button>
          </div>

          {/* div > 2 buttons */}

          {/* description */}
        </div>
      </header>
    </>
  );
}

export default Banner;
