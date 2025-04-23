import React from "react";
import { Button, Typography, Grid, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons';

function Landing() {
    const theme = useTheme();
    return (
        <>
            <Box sx={{ background: "linear-gradient(130deg, #FFF8F3 20%, #F2FBF8 100%)", minHeight: "100%" }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6} sx={{ padding: { xs: "8% 4%", md: "12% 2%" } }}>
                        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ width: { xs: "100%", md: "85%" } }}>
                            Innovating And Instant Messaging System
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{ width: { xs: "100%", md: "60%" } }}>
                            Sandes an initiative by the Government of India Under Atma Nirbhar Bharat
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
                    <Grid item xs={12} md={6} sx={{ width: { xs: "100%", md: "49%" }, marginLeft: { md: "5%" } }}>
                        <img src="assets/images/home.png" alt="Illustration" style={{ width: "100%" }} />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Landing