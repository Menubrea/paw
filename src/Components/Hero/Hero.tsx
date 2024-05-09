import React from "react";
import styles from "./hero.module.css";
import heroImage from "../../assets/hero-asset.svg";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <img src={heroImage} alt="hero" />

        <div className={styles.textContainer}>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            fringilla odio ac nunc tincidunt, nec consectetur sapien tristique.
            Vesttis velit.
          </p>
          <button className={styles.buttonSolid}>Adopt a Pet</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
