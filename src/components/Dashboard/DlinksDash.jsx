import React from 'react'
import NavbarDash from './NavbarDash'
import Footer from '../Footer/Footer'
import { Button, Typography, Grid, Box } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';

function DlinksDash() {
  return (
    <>
      <NavbarDash />
      <div className="section">
        <div className="row m-3">
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Download Center
          </Typography>
          <div className="row">
            <div className="col-md-4 mt-3">
              <div class="card" style={{ width: "100%" , height:"250px"}}>
                <div class="card-body" style={{ alignItems: "center", textAlign: "center" }}>
                  <p className='d-flex' style={{ alignItems: "center", justifyContent: "center" }}>  <img src='assets/images/social.png' alt='' width="10%" />Android</p>

                  <Button
                    variant="contained"
                    startIcon={<FontAwesomeIcon icon={faGooglePlay} style={{ fontSize: "50px" }} />}
                    sx={{ backgroundColor: "#000", textTransform: "none", alignItems: "flex-start", borderRadius: "10px", maxWidth: "200px" }}
                  >
                    <Box display="flex" flexDirection="column" alignItems="flex-start">
                      <span>GET IT ON</span>
                      <strong style={{ fontSize: "18px" }}>Google Play</strong>
                    </Box>
                  </Button>
                  <p class="card-text">Compatible on Android Version 5.0 or above.</p>
                  <Button variant="contained" style={{ marginRight: "10px" }} >APP INSIGHTS</Button>

                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div class="card" style={{ width: "100%" , height:"250px" }}>
                <div class="card-body" style={{ alignItems: "center", textAlign: "center" }}>
                  <p>   <FontAwesomeIcon icon={faApple} fontSize="40px" /> iOS</p>
                  <Button
                    variant="contained"
                    startIcon={<FontAwesomeIcon icon={faApple} style={{ fontSize: "50px" }} />}
                    sx={{ backgroundColor: "#000", textTransform: "none", alignItems: "flex-start", borderRadius: "10px", maxWidth: "200px" }}
                  >
                    <Box display="flex" flexDirection="column" alignItems="flex-start">
                      <span>Download on the</span>
                      <strong style={{ fontSize: "18px" }}>App Store</strong>
                    </Box>
                  </Button>
                  <p class="card-text">Compatible on iOS Version 11 or above.</p>
                  <Button variant="contained" style={{ marginRight: "10px" }} >APP INSIGHTS</Button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div class="card" style={{ width: "100%" , height:"250px" }}>
                <div class="card-body" style={{ alignItems: "center", textAlign: "center" }}>
                  <p class="card-text">Sandes Web</p>
                  <Button variant="contained" style={{ marginRight: "10px" }} >APP INSIGHTS</Button>
                  <Button variant="contained" style={{ marginRight: "10px" }} >APP INSIGHTS</Button>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="row m-3">
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Chat Statistics
          </Typography>
          <div className="row">
            <div className="col-md-4 mt-3">
              <div class="card" style={{ width: "100%" }}>
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div class="card" style={{ width: "100%" }}>
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div class="card" style={{ width: "100%" }}>
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="row m-3">
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Chat Statistics
          </Typography>
          <div className="row">
            <div className="col-md-4 mt-3">
              <div class="card" style={{ width: "100%" }}>
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div class="card" style={{ width: "100%" }}>
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div class="card" style={{ width: "100%" }}>
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="row m-3">
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Chat Statistics
          </Typography>
          <div className="row">
            <div className="col-md-4 mt-3">
              <div class="card" style={{ width: "100%" }}>
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div class="card" style={{ width: "100%" }}>
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div class="card" style={{ width: "100%" }}>
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default DlinksDash