import React from 'react'
import classes from "./Courses.module.css";
import Student from "../../Assets/Python.png";
import Student2 from "../../Assets/Digital.png";
import Student3 from "../../Assets/Web.png";

const Courses = () => {
  return (
    <div className={classes.container}>
        <div className={classes.innerContainer}>
            <div className={classes.topCourses}>
                <h3>POPULAR PROGRAMMES</h3>
                <p>Elevate your skills with our most in-demand programmes</p>
                <div className={classes.line}>
                    <hr/>
                </div>
                <div className={classes.btn}>
                    <button>SHORT TERM COURSE</button>
                    <button>LONG TERM COURSE</button>
                </div>
            </div>
            <div className={classes.cardWrap}>
                <div className={classes.card}>
                  <div className={classes.cardImage}>
                    <img src={Student} alt="Student"/>
                  </div>
             
                <div className={classes.cardText}>
                  {/* <p>PYTHON PROGRAMMING</p> */}
                </div>
                </div>

                <div className={classes.card}>
                  <div className={classes.cardImage}>
                    <img src={Student2} alt="Student"/>
                  </div>
             
                <div className={classes.cardText}>
                  {/* <p>DIGITAL MARKETING</p> */}
                </div>
                </div>
                <div className={classes.card}>
                  <div className={classes.cardImage}>
                    <img src={Student3} alt="Student"/>
                  </div>
             
                <div className={classes.cardText}>
                  {/* <p>WEB DESIGN</p> */}
                </div>
                </div>
            </div>
            <div className={classes.butt}>
              <button>EXPLORE MORE</button>
            </div>
        </div>
      
    </div>
  )
}

export default Courses
