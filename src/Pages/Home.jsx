import img8 from '../assets/img-small/img8-small.jpg'
import '../Styles/Home.css'
import { motion } from "framer-motion"
import React, { useState, useContext } from 'react';
import { CursorContext } from '../context/CursorContext';
const Home = () => {
    const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
    return (
        
        <div className='container'>
            <motion.h1 initial={{opacity: 0, y: '-80%'}}
            animate={{opacity: 1, y:0}}
            exit={{opacity:0, y:'-80%'}}
            transition={{ duration: 0.85 }}
            className='title-text' >Film photography<br/>& Programming</motion.h1>
                <motion.img 
                initial={{opacity: 0, y: '40%'}}
                animate={{opacity: 1, y:0}}
                exit={{opacity:0, y:'40%'}}
                transition={{ duration: 0.85 }}
                className='home-img' src={img8} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}/>
        </div>
    );
}

export default Home;