
import React from 'react'
import Statistics from '../LandingPage/Statistics'
import { Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faUsersLine, faSquareCheck, faChartLine , faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';

function Dashboard_Admin() {
    return (
        <>
            <div className="row m-3" >
                <div className="dash-top d-flex" style={{justifyContent:"space-between"}}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        Chat Statistics
                    </Typography>
                    <div className="dash-top-btn" >
                        <Button variant="contained" style={{marginRight:"10px"}} >APP INSIGHTS</Button>
                        <Button variant="contained"><FontAwesomeIcon icon={faEnvelope} /> BROADCAST MESSAGE</Button>
                    </div>
                </div>

                <div className="col-md-3 mt-3">
                    <div class="card" style={{ width: "100%" }}>
                        <div class="card-body d-flex">
                            <FontAwesomeIcon icon={faCube} fontSize="65" /> <p class="card-text ml-4">Organizations Units <br /><strong style={{ fontSize: "30px" }}>2</strong></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-3">
                    <div class="card" style={{ width: "100%" }}>
                        <div class="card-body d-flex">
                            <FontAwesomeIcon icon={faUsersLine} fontSize="65" /> <p class="card-text ml-4">Organizations Units <br /><strong style={{ fontSize: "30px" }}>37</strong></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-3">
                    <div class="card" style={{ width: "100%" }}>
                        <div class="card-body d-flex">
                            <FontAwesomeIcon icon={faSquareCheck} fontSize="65" /> <p class="card-text ml-4">Organizations Units <br /><strong style={{ fontSize: "30px" }}>25</strong></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-3">
                    <div class="card" style={{ width: "100%" }}>
                        <div class="card-body d-flex">
                            <FontAwesomeIcon icon={faChartLine} fontSize="65" /> <p class="card-text ml-4">Organizations Units <br /><strong style={{ fontSize: "30px" }}>847</strong></p>
                        </div>
                    </div>
                </div>

                <Statistics />
            </div>



        </>
    )
}

export default Dashboard_Admin