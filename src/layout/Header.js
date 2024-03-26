import { Typography } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import NavRes from './NavRes';

function Header() {
   
  return (
    <>
    <div className=' sideRes'style={{position:"fixed", top:"5px",right:"10px"}}>
  <NavRes/>
   </div>
       <nav className='container-fluid p-0 navContainer sidedesktop'>
        <div className='row d-flex justify-content-around align-items-center navRow' >
            <div className='col-md-2'>
            <Typography variant='h4' style={{color:"orange"}}> <i className='fa fa-solid fa-paw fa-1x'/> Pet Shop</Typography>
            </div>
            <div className='col-md-4'>
                <ul className='d-flex justify-content-evenly align-items-center m-0'>
                    <li><NavLink className='btn btn-primary navtabs' to="/"> 
                    <Typography>Home</Typography></NavLink></li>

                    <li><NavLink className='btn btn-primary navtabs' to="/about">
                      <Typography>About</Typography></NavLink></li>

                    <li><NavLink className='btn btn-primary navtabs' to="/pet">
                      <Typography>Pets</Typography></NavLink></li>

                    <li><NavLink className='btn btn-primary navtabs' to="https://github.com/Liaqat22/pet-shop" target="_blank">
                      <Typography>Source Code</Typography></NavLink></li>
               
                </ul>
            </div>
            <div className='col-md-2 text-center'>
           
            <Typography variant='h6'> <i className={`fa fa-solid fa-phone fa-1x mx-2`} style={{color:"orange"}}/> 123456789</Typography>

            </div>
        </div>
    </nav>
      
    </>
  )
}

export default Header
