import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./App.scss";
import { motion } from "framer-motion";
import { delay } from "framer-motion";
const Home = () => {
  return (
    <section className="home-page">
      <motion.ul
        className="planetimages"
        initial={{ x: 1600 }}
        animate={{ x: 0 }}
       
      >
        <motion.li
          animate={{
            rotate: 360,
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <NavLink to={`/planet/Mercury`}>
            <img src="../assets/planet-mercury.svg" />
          </NavLink>
        </motion.li>
        <motion.li
          animate={{
            rotate: 360,
          }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <NavLink to={`/planet/Venus`}>
            <img src="../assets/planet-venus.svg" />
          </NavLink>
        </motion.li>
        <motion.li
          animate={{
            rotate: 360,
          }}
          transition={{ repeat: Infinity, duration: 6 }}
        >
          <NavLink to={`/planet/Earth`}>
            <img src="../assets/planet-earth.svg" />
          </NavLink>
        </motion.li>
        <motion.li
          animate={{
            rotate: 360,
          }}
          transition={{ repeat: Infinity, duration: 8 }}
        >
          <NavLink to={`/planet/Mars`}>
            <img src="../assets/planet-mars.svg" />
          </NavLink>
        </motion.li>
        <motion.li
          animate={{
            rotate: 360,
          }}
          transition={{ repeat: Infinity, duration: 10 }}
        >
          <NavLink to={`/planet/Jupiter`}>
            <img src="../assets/planet-jupiter.svg" />
          </NavLink>
        </motion.li>

        <motion.li
          animate={{
            rotate: 180,
          }}
          transition={{ repeat: Infinity, duration: 12 }}
        >
          <NavLink to={`/planet/Saturn`}>
            <img src="../assets/planet-saturn.svg" />
          </NavLink>
        </motion.li>
        <motion.li
          animate={{
            rotate: 360,
          }}
          transition={{ repeat: Infinity, duration: 14 }}
        >
          <NavLink to={`/planet/Uranus`}>
            <img src="../assets/planet-uranus.svg" />
          </NavLink>
        </motion.li>

        <motion.li
          animate={{
            rotate: 360,
          }}
          transition={{ repeat: Infinity, duration: 16 }}
        >
          <NavLink to={`/planet/Neptune`}>
            <img src="../assets/planet-neptune.svg" />
          </NavLink>
        </motion.li>
      </motion.ul>
    </section>
  );
};

export default Home;