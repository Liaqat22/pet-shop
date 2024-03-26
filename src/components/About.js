import { Typography } from '@mui/material'
import React from 'react'

function About() {
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6'>
            <img src='https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/dog-P228UWM.jpg' alt='dog' style={{width:"100%"}}/>
        </div>
        <div className='col-md-6'>
            <Typography variant='h4'><b>About Us</b></Typography>
            <div className='mt-3'>

            <Typography className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Typography>
            <Typography className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Typography>
            <Typography className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Typography>
            </div>
            <ul className='mt-3'>
                <li>Lorem ipsum dolor sit amet, consectetur</li>
                <li>No delenit detracto eum, vix ne integre taci</li>
                <li>An pro facete dicuntei ut epicuri</li>
            </ul>

        </div>
      </div>
      </div>
    </>
  )
}

export default About
