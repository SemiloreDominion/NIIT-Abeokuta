import React from 'react'
import classes from "./AboutHome.module.css";
import Logo from "../../Assets/Logo.png";
import Student from "../../Assets/AboutImage.png";
import background from "../../Assets/Gradient.png";

const AboutHome = () => {
  return (
    <div className={classes.container}>
      <div className={classes.gradient}>
        <img src={background} alt="logo"/>
      </div>
    <div className={classes.innerContainer}>
      <div className={classes.aboutText}>
            <div className={classes.logo}>
                <img src={Logo} alt="logo"/>
            </div>
            <h5>About Us</h5>
            <p>NIIT is a leading Skills and Talent Development Corporation that is building a manpower pool for global industry requirements.</p>
            <p>The company, which was set up in 1981 to help the nascent IT industry overcome its human resource challenges, today ranks among the world's leading training companies owing to its vast and comprehensive array of talent development programs.</p>
            <button>Learn More</button>
      </div>
      <div className={classes.aboutImage}>
        <img src={Student} alt="student"/>
      </div>
    </div>
    </div>
  )
}

export default AboutHome
