import React from 'react'
import NavbarDash from './NavbarDash'
import Footer from '../Footer/Footer'
import { Button, Typography, Grid, Box } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';
import { faMobile , faEnvelope  } from '@fortawesome/free-solid-svg-icons';

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
              <div class="card" style={{ width: "100%", height: "250px" }}>
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
                  <Button variant="contained" style={{ marginRight: "10px" }} >QRG [3MB] [PDF]</Button>

                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div class="card" style={{ width: "100%", height: "250px" }}>
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
                  <Button variant="contained" style={{ marginRight: "10px" }} >QRG [2.1MB] [PDF]</Button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div class="card" style={{ width: "100%", height: "250px" }}>
                <div class="card-body" style={{ alignItems: "center", textAlign: "center" }}>
                  <p class="card-text">Sandes Web</p>
                  <Button variant="contained" style={{ marginRight: "10px" }} >LAUNCH SANDES WEB</Button>
                  <Button variant="contained" style={{ marginRight: "10px" }} >HELP [331KB][PDF]</Button>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="row m-3">
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Support
          </Typography>
          <div className="row">
            <div className="col-md-3 mt-3">
              <div class="card" style={{ width: "100%" }}>
                <img src="assets/images/FAQ.png" class="card-img-top" alt="..." style={{ height: "210px" }} />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Button variant="contained" href='assets/images/faq.pdf' className='mt-3' style={{ marginRight: "10px" }} >FAQ [503KB][PDF]</Button>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div class="card" style={{ width: "100%" }}>
                <img src="assets/images/User-menual.jpg" class="card-img-top" alt="..." style={{ height: "210px" }} />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Button variant="contained" href='assets/images/portal-um.pdf' className='mt-3' style={{ marginRight: "10px" }} >SANDES PORTAL-USER MANUAL [249KB][PDF]</Button>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div class="card" style={{ width: "100%" }}>
                <img src="assets/images/screencast.jpg" class="card-img-top" alt="..." style={{ height: "210px" }} />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Button variant="contained" className='mt-3' style={{ marginRight: "10px" }} >SCREEN CASTS </Button>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div class="card" style={{ width: "100%" }}>
                <img src="assets/images/release-notes.avif" class="card-img-top" alt="..." style={{ height: "210px" }} />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Button variant="contained" href='assets/images/faq.pdf' className='mt-3' style={{ marginRight: "10px" }} >RELEASE NOTES</Button>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="row m-3">
          <Typography variant="h5" fontWeight="bold" gutterBottom>
          Support Network
          </Typography>
          <div className="row">
            <div className="col-md-6 mt-3">
              <div class="card" style={{ width: "100%" }}>
                <div class="card-body m-3">
                  <p class="card-text mt-2">Sandes Team NIC Kerala</p>
                  <p class="card-text mt-2">IP Phone: 33049</p>

                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div class="card" style={{ width: "100%" }}>
                <div class="card-body m-3">
                  <p class="card-text mt-2">Sandes Team NIC HQ</p>
                  <p class="card-text mt-2">IP Phone: 5951</p>

                </div>
              </div>
            </div>
            
          </div>
        </div>

        <div className="row m-3">
          <Typography variant="h5" fontWeight="bold" gutterBottom>
          Administrators
          </Typography>
          <div className="row">
            <div className="col-md-4 mt-3 ">
              <div class="card" style={{ width: "100%" }}>
                <div class="card-body  m-3">
                  <p class="card-text mt-2">Abhishek</p>
                  <p class="card-text mt-2"><FontAwesomeIcon icon={faEnvelope} /> abhishek02official@gmail.com</p>
                  <p class="card-text mt-2"><FontAwesomeIcon icon={faMobile} /> +91-9984261451</p>

                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div class="card" style={{ width: "100%" }}>
                <div class="card-body  m-3">
                  <p class="card-text mt-2">Vishal Singh</p>
                  <p class="card-text mt-2"> <FontAwesomeIcon icon={faEnvelope} /> Vishalsingh@gmail.com</p>
                  <p class="card-text mt-2"><FontAwesomeIcon icon={faMobile} /> +91-8368105795</p>

                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div class="card" style={{ width: "100%" }}>
                <div class="card-body m-3">
                  <p class="card-text mt-2">Ms.Komala C.N</p>
                  <p class="card-text mt-2"><FontAwesomeIcon icon={faEnvelope} /> cn.komala@stpi.in</p>
                  <p class="card-text mt-2"> <FontAwesomeIcon icon={faMobile} /> +91-9900144862</p>

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