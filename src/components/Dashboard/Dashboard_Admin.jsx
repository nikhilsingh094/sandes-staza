
import React, { useState } from 'react'
import Statistics from '../LandingPage/Statistics'
import {
    Drawer,
    Button,
    Box,
    TextField,
    Typography
} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faUsersLine, faSquareCheck, faChartLine, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';

function Dashboard_Admin() {
    const [open, setOpen] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);


    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log('Form Data:', {
            name: formData.get('name'),
            email: formData.get('email'),
        });
        setOpen(false); // close after submit
    };
    return (
        <>
            <div className="row m-3" >
                <div className="dash-top d-flex" style={{ justifyContent: "space-between" }}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        Chat Statistics
                    </Typography>
                    <div className="dash-top-btn" >
                        <Button variant="contained" href='/APPInsights' style={{ marginRight: "10px" }} >APP INSIGHTS</Button>
                        <Button variant="contained" onClick={toggleDrawer(true)}><FontAwesomeIcon icon={faEnvelope} /> BROADCAST MESSAGE</Button>
                        {/* <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                sx={{ p: 4, width: '100%', maxWidth: 600, mx: 'auto' }}
                            >
                                <Typography variant="h6" gutterBottom>
                                    Fill in your info
                                </Typography>

                                <FormControl fullWidth margin="normal">
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                                <TextField
                                    fullWidth
                                    margin="normal"
                                    name="message"
                                    label="Message"
                                    multiline
                                    rows={4}
                                />

                                <Box display="flex" gap={2} mt={2}>
                                    <FormControl>
                                        <label>
                                            <input type="checkbox" name="option1" /> Option 1
                                        </label>
                                    </FormControl>
                                    <FormControl>
                                        <label>
                                            <input type="checkbox" name="option2" /> Option 2
                                        </label>
                                    </FormControl>
                                </Box>

                                <Box mt={2}>
                                    <Button variant="outlined" component="label">
                                        Upload Image
                                        <input
                                            hidden
                                            accept="image/*"
                                            type="file"
                                            onChange={(e) => {
                                                const file = e.target.files[0];
                                                if (file) {
                                                    const reader = new FileReader();
                                                    reader.onload = (event) => {
                                                        setImagePreview(event.target.result);
                                                    };
                                                    reader.readAsDataURL(file);
                                                }
                                            }}
                                        />
                                    </Button>
                                </Box>

                                {imagePreview && (
                                    <Box mt={2}>
                                        <img src={imagePreview} alt="Preview" style={{ width: '100%', maxHeight: 200, objectFit: 'contain' }} />
                                    </Box>
                                )}

                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Read-Only Field"
                                    value="This is read-only"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                                <Box display="flex" justifyContent="space-between" mt={3}>
                                    <Button variant="outlined" onClick={toggleDrawer(false)}>Cancel</Button>
                                    <Button variant="contained" color="primary">Send Email</Button>
                                    <Button variant="contained" color="secondary">Send SMS</Button>
                                </Box>
                            </Box>

                        </Drawer> */}
                    </div>
                </div>

                <div className="col-md-3 mt-3">
                    <div class="card" style={{ width: "100%" }}>
                        <Link to="/OrganizationOverview">
                        <div class="card-body d-flex">
                            <FontAwesomeIcon icon={faCube} fontSize="65" /> <p class="card-text ml-4">Organizations Units <br /><strong style={{ fontSize: "30px" }}>2</strong></p>
                        </div>
                        </Link>
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