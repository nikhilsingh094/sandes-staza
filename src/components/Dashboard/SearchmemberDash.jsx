import React from 'react'
import NavbarDash from './NavbarDash'
import Footer from '../Footer/Footer'
import { Typography } from '@mui/material'

function SearchmemberDash() {

    return (
        <div>
            <NavbarDash />
            <div className="m-3" style={{ height: '70vh' }}>
                <div className="overdata mb-3" style={{ justifyContent: 'space-between', display: 'flex' }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Employee/Login Management
                    </Typography>
                    <div className="button d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    )
}

export default SearchmemberDash