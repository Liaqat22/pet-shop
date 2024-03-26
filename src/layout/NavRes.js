import { Avatar, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function NavRes() {
  const list = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Pets", url: "/pet" },
    { name: "Source Code", url: "https://github.com/Liaqat22/pet-shop" },

  ]
  return (
    <>
      <div>
        <Avatar sx={{ background: "orange" }}>

          <i className="fa-solid fa-bars-staggered  p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{ color: "white" }} />
        </Avatar>
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ background: "linear-gradient(257deg, #5c3304, #00ff4e45, #50405080, transparent)", backdropFilter: "blur(3px)" }}>

          <div className="text-center p-3 mt-3">
            <i type="button" className="fa-solid fa-xmark fa-2x" data-bs-dismiss="offcanvas" aria-label="Close" style={{ color: "white" }} />
          </div>

          <div className="offcanvas-body text-center">
          <Typography variant='h6' style={{color:"orange"}}> <i className='fa fa-solid fa-paw fa-1x'/> Pet Shop</Typography>
            <ul className=' p-0'>
              {list.map((t, i) => (
                <li key={i + 1}>
                  <NavLink to={t.url} className=" btn btn-primary navtabs" style={{ background: 'transparent' ,color:"white"}}><Typography>
                    {t.name} </Typography>
                  </NavLink></li>
              ))}
            </ul>
            ...
          </div>
        </div>
      </div>
    </>
  )
}

export default NavRes
