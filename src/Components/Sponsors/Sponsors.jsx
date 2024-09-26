import React from 'react'
import classes from "./Sponsors.module.css";
import Countries from "../../Assets/Countries.png";
import Learners from "../../Assets/Learners.png";
import Schools from "../../Assets/Schools.png";
import Faculty from "../../Assets/Faculty.png";
import Certification from "../../Assets/Certification.png";
import Teeside from "../../Assets/Teeside.png";
import HDFC from "../../Assets/HDFC 1.png";
import FINOCULUS from "../../Assets/Finoculus 1.png";
import Sentienz from "../../Assets/sentienz  1.png";
import HDB from "../../Assets/HDB 1.png";
import ITS from "../../Assets/IT Solution Services 1.png";
import Neptune from "../../Assets/Neptune Software Group 1.png";

const Sponsors = () => {
  return (
    <div className={classes.container}>
      <div className={classes.sponsor}>
        <div className={classes.icons}>
            <div className={classes.iconImage}>
                <img src={Countries} alt="icon"/>
            </div>
            <div className={classes.iconText}>
                <h5>PRESENT IN 40 COUNTRIES WORLDWIDE</h5>
            </div>
        </div>
        <div className={classes.icons}>
            <div className={classes.iconImage}>
                <img src={Learners} alt="icon"/>
            </div>
            <div className={classes.iconText}>
                <h5>IMPACTED OVER 35 MILLION LEARNERS</h5>
            </div>
        </div>
        <div className={classes.icons}>
            <div className={classes.iconImage}>
                <img src={Schools} alt="icon"/>
            </div>
            <div className={classes.iconText}>
                <h5>IMPACTED 17,000 SCHOOLS WORLDWIDE</h5>
            </div>
        </div>
        <div className={classes.icons}>
            <div className={classes.iconImage}>
                <img src={Faculty} alt="icon"/>
            </div>
            <div className={classes.iconText}>
                <h5>WE HAVE EXPERIENCED FALCUTY</h5>
            </div>
        </div>
        <div className={classes.icons}>
            <div className={classes.iconImage}>
                <img src={Certification} alt="icon"/>
            </div>
            <div className={classes.iconText}>
                <h5>INTERNATIONAL CERTIFICATION MAPPED COURSES</h5>
            </div>
        </div>
        <div className={classes.icons}>
            <div className={classes.iconImage}>
                <img src={Teeside} alt="icon"/>
            </div>
            <div className={classes.iconText}>
                <h5>TIE-UP WITH TEESIDE UNIVERSITY</h5>
            </div>
        </div>
      </div>

    <div className={classes.sponsor2}>
    <div className={classes.iconImage}>
        <img src={HDFC} alt="icon"/>
    </div>
    <div className={classes.iconImage}>
        <img src={FINOCULUS} alt="icon"/>
    </div>
    <div className={classes.iconImage}>
        <img src={Sentienz} alt="icon"/>
    </div>
    <div className={classes.iconImage}>
        <img src={HDB} alt="icon"/>
    </div>
    <div className={classes.iconImage}>
        <img src={ITS} alt="icon"/>
    </div>
    <div className={classes.iconImage}>
        <img src={Neptune} alt="icon"/>
    </div>
    
    </div>
    <p>Disclaimer: The aforementioned companies have no obligation to recruit NIIT students each year</p>
    </div>
  )
}

export default Sponsors
