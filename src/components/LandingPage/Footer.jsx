import React from 'react';
import { Box, Typography ,useMediaQuery, useTheme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div style={{ backgroundColor: '#f7f7f7', borderTop: '1px solid #ccc' }}>
            <div className="col-md-12  py-12 " style={{display:isMobile?"auto":"flex" , padding:isMobile?"0 25px":"0 100px"}}>

                <div className="col-md-8">
                <div className="mt-3">
                        <img
                            src="assets/images/Digital_India.webp"
                            alt="Digital India"
                            style={{ width:isMobile?"30%": "12%" }}
                        />
                    </div>
                    <br />
                    <Typography variant="h5" fontWeight="bold" gutterBottom style={{paddingTop:isMobile?"5%":"0"}}>
                        About
                    </Typography>

                    <p style={{ maxWidth: isMobile?"90%":'60%' }}>
                        Sandes, an initiative by the Government of India under Atma Nirbhar Bharat, is a platform to facilitate government officials and citizens to securely exchange messages.
                    </p>
                    <div className="d-flex gap-3 mt-3">
                        <a href="#"><FontAwesomeIcon icon={faLinkedin} size="2x" color="#0A66C2" /></a>
                        <a href="#"><FontAwesomeIcon icon={faFacebook} size="2x" color="#3b5998" /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} size="2x" color="#00acee" /></a>
                    </div>
                   
                </div>

                <div className="col-md-4" style={{paddingTop:isMobile?"10%":"5%"}}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom >
                        Explore Sandes
                    </Typography>

                    <ul className="list-unstyled">
                        <li><a href="#" className="text-decoration-none text-dark">Home</a></li>
                        <li><a href="#" className="text-decoration-none text-dark">Features</a></li>
                        <li><a href="#" className="text-decoration-none text-dark">Download the app</a></li>
                    </ul>

                    <Typography variant="h5" fontWeight="bold" gutterBottom  style={{paddingTop:isMobile?"10%":"0"}}>
                        Contact Us
                    </Typography>
                    <ul className="list-unstyled mb-4" >
                        <li><FontAwesomeIcon icon={faEnvelope} className="me-2" /> support-sandes@nic.in</li>
                        <li><FontAwesomeIcon icon={faGlobe} className="me-2" /> www.nic.in</li>
                    </ul>
                </div>
            </div>
            {/* <div className="row mt-4"> */}
            <div className="col-12 text-center" style={{ backgroundColor: '#e48f52', color: 'white', padding: '10px 0', fontSize: '1rem' , fontWeight:isMobile?"400":"700" }}>
                Site Designed, Developed and Maintained by National Informatics Center, Ministry of Electronics and IT, Government of India
            </div>
            {/* </div> */}
        </div>
    );
}

export default Footer;
