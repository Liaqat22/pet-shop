import { Avatar, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  const contactInfo = [
    {icon : "fa-location" , text1 : "516 Columbia Blvd" ,text2 : "Sonoma, CA 21202" },
    {icon : "fa-phone" , text1 : "Office: 772-619-6309 " ,text2 : "Inquiries: 772-619-6432" },
    {icon : "fa-clock" , text1 : "Mon - Fri: 9am - 8pm" ,text2 : "Sat - Sun: Closed" },
  ]
  return (
    <>
    <div className='container-fluid mb-0 ' style={{background : "#232323" , color:"white"}} >
      <div className='row p-3'>
      <div className=' text-center mt-3 mb-3'>
        <Typography variant='h4'style={{color:"orange"}}> <i className='fa fa-solid fa-paw fa-1x'/> Pet Shop</Typography>
        </div>
        <hr/>
        {
          contactInfo.map((c)=>(

        <div className = "col-md-4  d-flex justify-content-center align-items-center mt-3 contactinfo">
          <Avatar sx={{background:"orange"}}>
            <i className={`fa fa-solid ${c.icon} fa-1x`}/>
          </Avatar >
          <div className='mx-3'>
          <Typography>{c.text1}</Typography>
          <Typography>{c.text2}</Typography>
          </div>
          </div>
          ))
        }
        <div className='row d-flex justify-content-center align-items-center mt-3 mb-3 m-0' style={{background:"#484242bf"}}>

        <div className='col-md-6'>
        <ul className='d-flex justify-content-evenly align-items-center p-3 mb-0'>
                    <li><NavLink className='btn btn-primary navtabs' to = "/">Home</NavLink></li>
                    <li><NavLink className='btn btn-primary navtabs' to = "/about">About</NavLink></li>
                    <li><NavLink className='btn btn-primary navtabs' to = "/pet">Pets</NavLink></li>
   
                </ul>
        </div>
        </div>
        <div className=' text-center mt-3'>
          <Typography>© Copyrights are Reserved by Liaqat Ali 2024</Typography>
        </div>
      </div>
       
    </div>
      
    </>
  )
}

export default Footer
