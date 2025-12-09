import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests, { baseUrlImg } from "../../utils/requests";
import api from "../../utils/axios";

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get(requests.fetchNetflixOriginals);

        setMovie(
          res.data.results[Math.floor(Math.random() * res.data.results.length)]
        );
      } catch (err) {
        console.log("Error while fetching banner data", err);
      }
    })();
  }, []);

  return (
    <>
      <div
        className="hero-banner"
        style={{
          background: `url(${baseUrlImg}${movie?.backdrop_path}) center/cover no-repeat`,
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>

          <div className="hero-buttons">
            <button
              className="btn btn-play"
              onClick={() => alert("Playing...")}
            >
              Play
            </button>

            <button
              className="btn btn-list"
              onClick={() => console.log("Added to list:", movie)}
            >
              My List
            </button>
          </div>

          <p className="hero-description">
            {movie?.overview
              ? movie.overview.length > 150
                ? movie.overview.slice(0, 150) + "..."
                : movie.overview
              : "No description available."}
          </p>
        </div>
      </div>
    </>
  );
}

export default Banner;
