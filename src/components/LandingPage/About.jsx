import React from "react";
import { Button, Typography, Grid, Box , useMediaQuery, useTheme} from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons';

function About() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            <Box sx={{ background: "linear-gradient(310deg, #FFF8F3 0%,rgb(157, 235, 209) 100%)" }}>

                <Grid container spacing={4} alignItems="center" >
                    <Grid item xs={12} md={6} sx={{ padding: "1% 2%",width: isMobile?"100%":"50%"}}>
                        <img src="assets/images/about.png" alt="Chat" style={{ width: isMobile?"100%":"60%" }} />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{width: isMobile?"100%":"45%"}}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            About Sandes
                        </Typography>
                        <Typography variant="body1">
                            Sandes, an initiative by the Government of India under Atma Nirbhar Bharat, is a platform to facilitate
                            government officials and citizens to securely exchange messages. Unique features of Sandes include
                            integration with eGov application to enable G2C, C2G, and G2G governance at your fingertips.
                        </Typography>

                        <Box mt={6} display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={2}>
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
                        </Box>
                    </Grid>
                </Grid>

            </Box>

        </>
    )
}

export default About