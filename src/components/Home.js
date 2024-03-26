import { Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import About from './About'
import DogCards from './DogCards'

function Home() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row bgimg'>
            <div className='col-md-7 d-flex align-items-center'>
              <div className='p-3'>

                <Typography variant='h3'>Description</Typography>
                <Typography className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Typography>
                <NavLink className="btn btn-primary tabs ">View Puppies <i className='fa fa-solid fa-arrow-right mx-1'/></NavLink>
                </div> 
            </div>
        </div>

    </div>
        <About/>
        <DogCards/>
      
    </>
  )
}

export default Home
