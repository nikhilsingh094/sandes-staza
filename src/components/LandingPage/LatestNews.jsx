import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
    Grid, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse,
    Avatar, IconButton, Typography,
    Box, useMediaQuery, useTheme
} from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function LatestNews() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const renderCard = () => (
        <Card sx={{ width: '100%' , backgroundColor:"#dddadab5" , borderRadius:"10px" }}>
            <CardHeader
                avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image="assets/images/chatting.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                    <Typography sx={{ marginBottom: 2 }}>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
                    </Typography>
                    <Typography sx={{ marginBottom: 2 }}>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat...
                    </Typography>
                    <Typography sx={{ marginBottom: 2 }}>
                        Add rice and stir very gently to distribute...
                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );

    return (
        <>
            <Box mt={10}>
                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ textAlign: "center" }}>
                    Latest News
                </Typography>
                <div className="row" >
                    <div className="col-md-12" style={{display:isMobile?"auto":"flex"}}>
                        {[1, 2, 3, 4].map((_, i) => (
                            <div className="col-md-3" style={{padding:"10px"}} key={i}>
                                {renderCard()}
                            </div>
                        ))}
                    </div>
                </div>
            </Box>

        </>
    );
}
