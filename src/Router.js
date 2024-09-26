import React from 'react'
import {useRoutes} from 'react-router'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Courses from './Pages/Courses/Courses';
import Register from './Pages/Register/Register';

const Router = () => {
    return useRoutes([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/contact",
            element: <Contact/>
        },
        {
            path: "/courses",
            element: <Courses/>
        },
        {
            path: "/register",
            element: <Register/>
        }
    ])
}

export default Router;