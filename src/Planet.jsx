import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import data from "../src/data.json";
import "./App.scss";
const Planet = () => {
  let { planetname } = useParams();

  const {
    name,
    images: {
      planet: planetimage,
      geology: geologyimage,
      internal: internalimage,
    },
    geology: { content: geologycontent, source: geologysource },
    overview: { content: overviewcontent, source: overviewsource },
    structure: { content: structurecontent, source: structuresource },
    radius,
    revolution,
    rotation,
    temperature,
  } = data.find((planet) => planetname === planet.name);

  const [planetimg, setplanetimg] = useState(planetimage);
  const [planetpara, setplanetpara] = useState(overviewcontent);
  const [source, setsource] = useState(overviewsource);
  const options = useRef("overview");

  function changeoption(e) {
    const geoImage = document.getElementById("geo-image");
    options.current = e.target.id;
    const buttons = document.querySelectorAll(".planet-infos button");
    buttons.forEach((btn) => {
      if (btn.id === e.target.id) {
        btn.classList.add("active-button");
      } else {
        btn.classList.remove("active-button");
      }
    });
    if (options.current === "overview") {
      setplanetpara(overviewcontent);
      setplanetimg(planetimage);
      setsource(overviewsource);
      geoImage.classList.add("hidden");
    } else if (options.current === "structure") {
      setplanetpara(structurecontent);
      setplanetimg(internalimage);
      setsource(structuresource);
      geoImage.classList.add("hidden");
    } else if (options.current === "surface") {
      setplanetpara(geologycontent);
      setplanetimg(planetimage);
      setsource(geologysource);
      geoImage.classList.remove("hidden");
    }
  }
  useEffect(() => {
    const geoImage = document.getElementById("geo-image");
    setplanetpara(overviewcontent);
    setplanetimg(planetimage);
    setsource(overviewsource);
    geoImage.classList.add("hidden");

    const buttons = document.querySelectorAll(".planet-infos button");
    buttons.forEach((btn) => {
      btn.classList.remove("active-button");
    });
  }, [planetname]);

  return (
    <>
      <motion.section
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="planet"
      >
        <section className="planet-info">
          <section className="planet-images">
            <motion.img
              animate={{
                rotate: 360,
              }}
              transition={{ repeat: Infinity, duration: 20 }}
              src={`../${planetimg}`}
              className="planet-img"
              alt=""
            />
            <img
              id="geo-image"
              className="surface-img hidden"
              src={`../${geologyimage}`}
            />
          </section>
          <section className="planet-infos">
            <motion.h2 className="planet-heading">{name}</motion.h2>
            <p>{planetpara}</p>
            <p>
              Source <a href={source}>Wiki</a>
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              id="overview"
              className="active-button inactive-button"
              onClick={(e) => changeoption(e)}
            >
              <span style={{ color: "hsl(240,6%,54%)" }}>01</span> Overview
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              id="structure"
              className="inactive-button"
              onClick={(e) => changeoption(e)}
            >
              <span style={{ color: "hsl(240,6%,54%)" }}>02</span> Structure
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              id="surface"
              className="inactive-button"
              onClick={(e) => changeoption(e)}
            >
              <span style={{ color: "hsl(240,6%,54%)" }}>03</span> Surface
            </motion.button>
          </section>
        </section>
        <section className="planet-stats">
          <motion.section whileHover={{ scale: 1.1 }} className="stats-card ">
            <h4>ROTATION TIME:</h4>
            <h3>{rotation}</h3>
          </motion.section>
          <motion.section whileHover={{ scale: 1.1 }} className="stats-card">
            <h4>REVOLUTION TIME:</h4>
            <h3>{revolution}</h3>
          </motion.section>
          <motion.section whileHover={{ scale: 1.1 }} className="stats-card">
            <h4>RADIUS:</h4>
            <h3>{radius}</h3>
          </motion.section>
          <motion.section whileHover={{ scale: 1.1 }} className="stats-card">
            <h4>AVERAGE TEMP:</h4>
            <h3>{temperature}</h3>
          </motion.section>
        </section>
      </motion.section>
    </>
  );
};

export default Planet;