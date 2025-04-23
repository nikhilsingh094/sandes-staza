import * as React from 'react';
import {
    Box,
    Toolbar,
    Typography,
    Button,
    Stack,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

export default function Navbar() {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerToggle = () => {
        setOpenDrawer(!openDrawer);
    };

    const navLinks = ['Home', 'About', 'Features', 'Latest News'];

    return (
        <Box>
            <Toolbar sx={{ justifyContent: 'space-between' }}>

                <Box sx={{ display: 'inline-flex', width: '32%', alignItems: 'center' }}>
                    <img
                        src="assets/images/ashok.png"
                        alt="logo"
                        loading="lazy"
                        width="40px"
                        style={{ marginRight: '25px' }}
                    />
                    <img
                        src="assets/images/sandes_logo.png"
                        alt="logo"
                        loading="lazy"
                        width="65px"
                    />
                </Box>

                {isMobile ? (
                    <IconButton onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <Box sx={{ display: 'inline-flex', width: '32%' }}>
                        {navLinks.map((link) => (
                            <Typography key={link} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                {link}
                            </Typography>
                        ))}
                    </Box>
                )}
                {!isMobile && (
                    <Box sx={{ display: 'inline-flex', width: '32%', justifyContent: 'end' }}>
                        <Stack direction="row" spacing={2}>
                            <Button color="success" variant="contained" sx={{ borderRadius: '25px' }} href='/LoginAdmin'>
                                Admin Login
                            </Button>
                            <Button
                                color="success"
                                variant="contained"
                                sx={{ borderRadius: '25px' }}
                                href="/LoginWeb"
                            >
                                Web Login
                            </Button>
                        </Stack>
                    </Box>
                )}
            </Toolbar>
            <Drawer
                anchor="right"
                open={openDrawer}
                onClose={handleDrawerToggle}
                PaperProps={{ sx: { width: '250px' } }}
            >
                <Box sx={{ p: 2 }}>
                    <List>
                        {navLinks.map((text) => (
                            <ListItem button key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Stack direction="column" spacing={2} sx={{ mt: 2 }}>
                        <Button color="success" variant="contained" sx={{ borderRadius: '25px' }} href='/LoginAdmin'>
                            Admin Login
                        </Button>
                        <Button
                            color="success"
                            variant="contained"
                            sx={{ borderRadius: '25px' }}
                            href="/LoginWeb"
                        >
                            Web Login
                        </Button>
                    </Stack>
                </Box>
            </Drawer>
        </Box>
    );
}
