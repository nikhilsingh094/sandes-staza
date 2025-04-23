import * as React from 'react';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot
} from '@mui/lab';
import { Paper, Typography, Box, useMediaQuery, useTheme } from '@mui/material';

const roadmapData = [
    {
        text: "Hosted at government infrastructure and governed by rules and regulations of GOI.",
        image: "assets/images/Hosted.jpg"
    },
    {
        text: "Data and Strategic control with Government.",
        image: "assets/images/Data_store.png"
    },
    {
        text: "Web Portal for Organisation/Member Management and Dashboard Services",
        image: "assets/images/WebPortal.png"
    },
    {
        text: "Messaging Gateway for Integration with Government Applications",
        image: "assets/images/Message.png"
    },
    {
        text: "App Settings for Privacy and security",
        image: "assets/images/Security.webp"
    }
];

function Features() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box mt={10} mb={10}>
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ textAlign: "center" }}>
                Features
            </Typography>
            <Box sx={{ maxWidth: isMobile ? '100%' : '70%', mx: 'auto', px: 2 }}>
                <Timeline position={isMobile ? "right" : "alternate"}>
                    {roadmapData.map((item, index) => (
                        <TimelineItem key={index}>

                            <TimelineOppositeContent sx={{ flex: isMobile ? 0 : 1, py: '12px' }} />

                            <TimelineSeparator>
                                <TimelineDot color="primary" />
                                {index < roadmapData.length - 1 && <TimelineConnector />}
                            </TimelineSeparator>

                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Paper elevation={3} sx={{ p: 2, width: isMobile ? '100%' : 'auto' }}>
                                    <Box
                                        // display="flex"
                                        flexDirection={isMobile ? "column" : "row"}
                                        alignItems="center"
                                        gap={2}
                                    >
                                        <Box
                                            component="img"
                                            src={item.image}
                                            alt="Feature"
                                            sx={{
                                                width: isMobile ? '100%' : "100%",
                                                height: 'auto',
                                                borderRadius: 2
                                            }}
                                        />
                                        <Typography variant="body1">{item.text}</Typography>
                                    </Box>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Box>
        </Box>
    );
}

export default Features;
