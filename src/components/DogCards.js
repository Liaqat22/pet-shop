import React from 'react'
import { data } from './dogData'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

function DogCards() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='text-center'>
                        <Typography variant='h4'>
                          <b>Featured pets</b>  
                        </Typography>
                    </div>
                    {
                        data.map((d, i) => (

                            <div className='col-md-4 mt-3' key={i + 1}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={d.photo}
                                        alt={d.name}
                                    />
                                    <CardContent>
                                        <Typography variant="body1" className='mb-2'>
                                            <b >{d.name}</b>
                                        </Typography>
                                        <Typography variant="body2" >
                                            {d.description}
                                        </Typography>
                                    </CardContent>
                                    <NavLink className="btn btn-secondary navlink tabs">Learn more</NavLink>
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default DogCards
