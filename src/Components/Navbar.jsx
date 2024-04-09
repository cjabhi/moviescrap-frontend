import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import {FaBars, FaTimes} from "react-icons/fa";
import Categories from './Categories';


const Navbar = () => {

    const [click , setClick] = useState(false);
    const handleclick = ()=>{setClick(!click)};
    const [color , setcolor] = useState(true);
    const [showcat , setShowcat] = useState(false);
    const anywhere = document.querySelector('body');
    
  return (
    <div className={color ? "header header-bg" : " header"} >
        <Link> <h1>MOVIESFLIX</h1> </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"} >
            <li> <Link to={'/'} >Home</Link> </li>
            <li> <Link to={'/mpop'} >Bollywood</Link> </li>
            <li> <Link to={'/latest'}>Hollywood</Link> </li>
            <li> <Link to={'/53'} >latest</Link> </li>
            {/* <li className={window.screen.width>640? "dnone" : "done"}> <Link to={'/Categories'} >Categories</Link> </li> */}
             
        </ul>
        <div className='hamburger' >
            {
                !click ? (<FaBars size={20} style={{color:"#fff"}} onClick={handleclick} />) : (<FaTimes size={20} style={{color:"#fff"}} onClick={handleclick} />)
            }
        </div>
        
    </div>
  )
}

export default Navbar