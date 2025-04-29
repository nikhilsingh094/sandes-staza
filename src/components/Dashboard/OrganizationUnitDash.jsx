// import React, { useState } from 'react';
// import Typography from '@mui/material/Typography';
// import Popover from '@mui/material/Popover';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import NavbarDash from './NavbarDash';
// import Footer from '../Footer/Footer';

// const tableData = [
//     { id: 1, name: 'Amit Sharma', email: 'amit@example.com', phone: '9876543210', city: 'Delhi', role: 'Developer', status: 'Active' },
//     { id: 2, name: 'Priya Singh', email: 'priya@example.com', phone: '8765432109', city: 'Mumbai', role: 'Designer', status: 'Inactive' },
//     { id: 3, name: 'Rahul Verma', email: 'rahul@example.com', phone: '7654321098', city: 'Bangalore', role: 'Manager', status: 'Active' },
//     { id: 4, name: 'Sneha Gupta', email: 'sneha@example.com', phone: '6543210987', city: 'Kolkata', role: 'Tester', status: 'Active' },
//     { id: 5, name: 'Vikram Rao', email: 'vikram@example.com', phone: '5432109876', city: 'Chennai', role: 'Analyst', status: 'Inactive' },
//     { id: 6, name: 'Anjali Mehta', email: 'anjali@example.com', phone: '4321098765', city: 'Pune', role: 'Developer', status: 'Active' },
//     { id: 7, name: 'Karan Patel', email: 'karan@example.com', phone: '3210987654', city: 'Hyderabad', role: 'Designer', status: 'Inactive' },
//     { id: 8, name: 'Neha Joshi', email: 'neha@example.com', phone: '2109876543', city: 'Ahmedabad', role: 'Manager', status: 'Active' },
//     { id: 9, name: 'Ravi Kumar', email: 'ravi@example.com', phone: '1098765432', city: 'Jaipur', role: 'Tester', status: 'Active' },
//     { id: 10, name: 'Suman Das', email: 'suman@example.com', phone: '0987654321', city: 'Lucknow', role: 'Analyst', status: 'Inactive' },
//     { id: 11, name: 'Pooja Reddy', email: 'pooja@example.com', phone: '9876543211', city: 'Surat', role: 'Developer', status: 'Active' },
//     { id: 12, name: 'Arjun Yadav', email: 'arjun@example.com', phone: '8765432110', city: 'Nagpur', role: 'Designer', status: 'Inactive' },
//     { id: 13, name: 'Meera Nair', email: 'meera@example.com', phone: '7654321109', city: 'Bhopal', role: 'Manager', status: 'Active' },
//     { id: 14, name: 'Suresh Menon', email: 'suresh@example.com', phone: '6543211098', city: 'Patna', role: 'Tester', status: 'Active' },
//     { id: 15, name: 'Lakshmi Pillai', email: 'lakshmi@example.com', phone: '5432109987', city: 'Kochi', role: 'Analyst', status: 'Inactive' },
// ];


// function OrganizationUnitDash() {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [anchorEl, setAnchorEl] = useState(null);
//     const [selectedRowId, setSelectedRowId] = useState(null);
//     const rowsPerPage = 5;
//     const [showSelect, setShowSelect] = useState(false);

//     const handleFilterClick = () => {
//         setShowSelect((prev) => !prev); // Toggle the state
//     };

//     const totalPages = Math.ceil(tableData.length / rowsPerPage);
//     const indexOfLastRow = currentPage * rowsPerPage;
//     const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//     const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);

//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     const handlePopoverOpen = (event, rowId) => {
//         setAnchorEl(event.currentTarget);
//         setSelectedRowId(rowId);
//     };

//     const handlePopoverClose = () => {
//         setAnchorEl(null);
//         setSelectedRowId(null);
//     };

//     const handleMenuItemClick = (action, rowId) => {
//         console.log(`Action: ${action} for Row ID: ${rowId}`);
//         handlePopoverClose();
//     };

//     const renderPagination = () => {
//         const pageNumbers = [];
//         for (let i = 1; i <= totalPages; i++) {
//             pageNumbers.push(i);
//         }

//         return (
//             <nav className="d-flex justify-content-center mt-3">
//                 <ul className="pagination">
//                     <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//                         <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
//                             Previous
//                         </button>
//                     </li>
//                     {pageNumbers.map((number) => (
//                         <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
//                             <button className="page-link" onClick={() => handlePageChange(number)}>
//                                 {number}
//                             </button>
//                         </li>
//                     ))}
//                     <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//                         <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
//                             Next
//                         </button>
//                     </li>
//                 </ul>
//             </nav>
//         );
//     };


//     return (
//         <>

//             <NavbarDash />
//             <div className="m-3" style={{ height: "70vh" }}>
//                 <div className="overdata mb-3" style={{ justifyContent: 'space-between', display: 'flex' }}>
//                     <Typography variant="h5" align="center" gutterBottom>
//                         Organization Unit
//                     </Typography>
//                     <div className="button">
//                         <button
//                             type="button"
//                             className="btn btn-primary mr-3"
//                             onClick={handleFilterClick}
//                         >
//                             Filter
//                         </button>


//                         <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
//                             + New
//                         </button>

//                         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                             <div class="modal-dialog">
//                                 <div class="modal-content" style={{ padding: "2%" }}>
//                                     <div class="modal-header">
//                                         {/* <h5 class="modal-title" id="exampleModalLabel">New Organization Unit [Ministry for POC]</h5> */}
//                                         <Typography variant="h6" mb={2}>New Organization Unit [Ministry for POC]</Typography>
//                                         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                                     </div>
//                                     <form>

//                                         <Typography variant="h6" mb={2} mt={2} textAlign="center">Organization for POC</Typography>

//                                         <div className="row">
//                                             <div className="col-md-6  mt-3">
//                                                 <select class="form-select" aria-label="Default select example">
//                                                     <option selected>Parent organization unit</option>
//                                                     <option value="1">One</option>
//                                                     <option value="2">Two</option>
//                                                     <option value="3">Three</option>
//                                                 </select>
//                                             </div>
//                                             <div className="col-md-6  mt-3">
//                                                 <select class="form-select" aria-label="Default select example">
//                                                     <option selected>Organization unit type</option>
//                                                     <option value="1">One</option>
//                                                     <option value="2">Two</option>
//                                                     <option value="3">Three</option>
//                                                 </select>
//                                             </div>
//                                             <div className="col-md-6  mt-3">
//                                                 <select class="form-select" aria-label="Default select example">
//                                                     <option selected>State</option>
//                                                     <option value="1">One</option>
//                                                     <option value="2">Two</option>
//                                                     <option value="3">Three</option>
//                                                 </select>
//                                             </div>
//                                             <div className="col-md-6  mt-3">
//                                                 <select class="form-select" aria-label="Default select example">
//                                                     <option selected>District</option>
//                                                     <option value="1">One</option>
//                                                     <option value="2">Two</option>
//                                                     <option value="3">Three</option>
//                                                 </select>
//                                             </div>
//                                             <div className="col-md-6 mt-3">
//                                                 <input class="form-control" type="text" placeholder="O u code" aria-label="default input example" />
//                                             </div>

//                                             <div className="col-md-6  mt-3">
//                                                 <input class="form-control" type="text" placeholder="O u name" aria-label="default input example" />
//                                             </div>

//                                             <div className="col-md-6 mt-3">
//                                                 <input class="form-control" type="text" placeholder="Address" aria-label="default input example" />
//                                             </div>

//                                             <div className="col-md-6  mt-3">
//                                                 <input class="form-control" type="text" placeholder="Pin code" aria-label="default input example" />
//                                             </div>
//                                             <div className="col-md-6 mt-3">
//                                                 <input class="form-control" type="text" placeholder="Landline" aria-label="default input example" />
//                                             </div>

//                                             <div className="col-md-6  mt-3">
//                                                 <input class="form-control" type="text" placeholder="Website" aria-label="default input example" />
//                                             </div>

//                                         </div>
//                                         <button type="submit" class="btn btn-primary m-3">Save</button>
//                                         <button type="submit" class="btn btn-danger">Close</button>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {showSelect && (
//                     <select className="form-select mt-2 mb-3" style={{ width: "300px" }} >
//                         <option value="">Select an option</option>
//                         <option value="1">Option 1</option>
//                         <option value="2">Option 2</option>
//                     </select>
//                 )}
//                 <div className="table-responsive">

//                     <table className="table table-striped table-bordered">
//                         <thead className="table-dark">
//                             <tr>
//                                 <th>ID</th>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Phone</th>
//                                 <th>City</th>
//                                 <th>Role</th>
//                                 <th>Status</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {currentRows.map((row) => (
//                                 <tr key={row.id}>
//                                     <td>{row.id}</td>
//                                     <td>{row.name}</td>
//                                     <td>{row.email}</td>
//                                     <td>{row.phone}</td>
//                                     <td>{row.city}</td>
//                                     <td>{row.role}</td>
//                                     <td>{row.status}</td>
//                                     <td>
//                                         <Button
//                                             variant="outlined"
//                                             size="small"
//                                             onClick={(event) => handlePopoverOpen(event, row.id)}
//                                         >
//                                             Actions
//                                         </Button>
//                                         <Popover
//                                             open={Boolean(anchorEl) && selectedRowId === row.id}
//                                             anchorEl={anchorEl}
//                                             onClose={handlePopoverClose}
//                                             anchorOrigin={{
//                                                 vertical: 'bottom',
//                                                 horizontal: 'left',
//                                             }}
//                                             transformOrigin={{
//                                                 vertical: 'top',
//                                                 horizontal: 'left',
//                                             }}
//                                         >
//                                             <List>
//                                                 <ListItem
//                                                     inductive
//                                                     onClick={() => {
//                                                         handleMenuItemClick('Send Sandes Message', row.id);
//                                                     }}
//                                                 >
//                                                     <ListItemText primary="Send Sandes Message" />
//                                                 </ListItem>
//                                                 <ListItem
//                                                     button
//                                                     onClick={() => handleMenuItemClick('Edit', row.id)}
//                                                 >
//                                                     <ListItemText primary="Edit" />
//                                                 </ListItem>
//                                                 <ListItem
//                                                     button
//                                                     onClick={() => handleMenuItemClick('Delete', row.id)}
//                                                 >
//                                                     <ListItemText primary="Delete" />
//                                                 </ListItem>
//                                                 <ListItem
//                                                     button
//                                                     onClick={() => handleMenuItemClick('Member wise status', row.id)}
//                                                 >
//                                                     <ListItemText primary="Member wise status" />
//                                                 </ListItem>
//                                                 <ListItem
//                                                     button
//                                                     onClick={() => handleMenuItemClick('Heat Map', row.id)}
//                                                 >
//                                                     <ListItemText primary="Heat Map based on chat activity" />
//                                                 </ListItem>


//                                             </List>
//                                         </Popover>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//                 {renderPagination()}
//             </div >
//             <Footer />

//         </>
//     );
// }

// export default OrganizationUnitDash;




import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import NavbarDash from './NavbarDash';
import Footer from '../Footer/Footer';
import { Drawer, FormControl, InputLabel, Select, MenuItem, TextField, Box } from '@mui/material';

const tableData = [
    { id: 1, name: 'Amit Sharma', email: 'amit@example.com', phone: '9876543210', city: 'Delhi', role: 'Developer', status: 'Active' },
    { id: 2, name: 'Priya Singh', email: 'priya@example.com', phone: '8765432109', city: 'Mumbai', role: 'Designer', status: 'Inactive' },
    { id: 3, name: 'Rahul Verma', email: 'rahul@example.com', phone: '7654321098', city: 'Bangalore', role: 'Manager', status: 'Active' },
    { id: 4, name: 'Sneha Gupta', email: 'sneha@example.com', phone: '6543210987', city: 'Kolkata', role: 'Tester', status: 'Active' },
    { id: 5, name: 'Vikram Rao', email: 'vikram@example.com', phone: '5432109876', city: 'Chennai', role: 'Analyst', status: 'Inactive' },
    { id: 6, name: 'Anjali Mehta', email: 'anjali@example.com', phone: '4321098765', city: 'Pune', role: 'Developer', status: 'Active' },
    { id: 7, name: 'Karan Patel', email: 'karan@example.com', phone: '3210987654', city: 'Hyderabad', role: 'Designer', status: 'Inactive' },
    { id: 8, name: 'Neha Joshi', email: 'neha@example.com', phone: '2109876543', city: 'Ahmedabad', role: 'Manager', status: 'Active' },
    { id: 9, name: 'Ravi Kumar', email: 'ravi@example.com', phone: '1098765432', city: 'Jaipur', role: 'Tester', status: 'Active' },
    { id: 10, name: 'Suman Das', email: 'suman@example.com', phone: '0987654321', city: 'Lucknow', role: 'Analyst', status: 'Inactive' },
    { id: 11, name: 'Pooja Reddy', email: 'pooja@example.com', phone: '9876543211', city: 'Surat', role: 'Developer', status: 'Active' },
    { id: 12, name: 'Arjun Yadav', email: 'arjun@example.com', phone: '8765432110', city: 'Nagpur', role: 'Designer', status: 'Inactive' },
    { id: 13, name: 'Meera Nair', email: 'meera@example.com', phone: '7654321109', city: 'Bhopal', role: 'Manager', status: 'Active' },
    { id: 14, name: 'Suresh Menon', email: 'suresh@example.com', phone: '6543211098', city: 'Patna', role: 'Tester', status: 'Active' },
    { id: 15, name: 'Lakshmi Pillai', email: 'lakshmi@example.com', phone: '5432109987', city: 'Kochi', role: 'Analyst', status: 'Inactive' },
];


function OrganizationUnitDash() {
    const [currentPage, setCurrentPage] = useState(1);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedRowId, setSelectedRowId] = useState(null);
    const [showSelect, setShowSelect] = useState(false);
    const [open, setOpen] = useState(false); // State to control Drawer
    const [age, setAge] = useState(''); // State for the dropdown (age selection)
    const [imagePreview, setImagePreview] = useState(''); // State for image preview

    const rowsPerPage = 5;
    const totalPages = Math.ceil(tableData.length / rowsPerPage);
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePopoverOpen = (event, rowId) => {
        setAnchorEl(event.currentTarget);
        setSelectedRowId(rowId);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
        setSelectedRowId(null);
    };

    const handleMenuItemClick = (action, rowId) => {
        if (action === 'Send Sandes Message') {
            setOpen(true); // Open the drawer when "Send Sandes Message" is clicked
        }
        console.log(`Action: ${action} for Row ID: ${rowId}`);
        handlePopoverClose();
    };

    // Form handling
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here (e.g., send message)
    };

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const toggleDrawer = (open) => () => {
        setOpen(open);
    };

    const renderPagination = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }

        return (
            <nav className="d-flex justify-content-center mt-3">
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                            Previous
                        </button>
                    </li>
                    {pageNumbers.map((number) => (
                        <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(number)}>
                                {number}
                            </button>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        );
    };

    return (
        <>
            <NavbarDash />
            <div className="m-3" style={{ height: '70vh' }}>
                <div className="overdata mb-3" style={{ justifyContent: 'space-between', display: 'flex' }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Organization Unit
                    </Typography>
                    <div className="button">
                        <button
                            type="button"
                            className="btn btn-primary mr-3"
                            onClick={() => setShowSelect((prev) => !prev)} // Toggle filter dropdown
                        >
                            Filter
                        </button>
                        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            + New
                        </button>
                    </div>
                </div>

                {showSelect && (
                    <select className="form-select mt-2 mb-3" style={{ width: '300px' }}>
                        <option value="">Select an option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                )}

                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>City</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentRows.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td>{row.name}</td>
                                    <td>{row.email}</td>
                                    <td>{row.phone}</td>
                                    <td>{row.city}</td>
                                    <td>{row.role}</td>
                                    <td>{row.status}</td>
                                    <td>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            onClick={(event) => handlePopoverOpen(event, row.id)}
                                        >
                                            Actions
                                        </Button>
                                        <Popover
                                            open={Boolean(anchorEl) && selectedRowId === row.id}
                                            anchorEl={anchorEl}
                                            onClose={handlePopoverClose}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                        >
                                            <List>
                                                <ListItem button onClick={() => handleMenuItemClick('Send Sandes Message', row.id)}>
                                                    <ListItemText primary="Send Sandes Message" />
                                                </ListItem>
                                                <ListItem
                                                    button
                                                    onClick={() => handleMenuItemClick('Edit', row.id)}
                                                >
                                                    <ListItemText primary="Edit" />
                                                </ListItem>
                                                <ListItem
                                                    button
                                                    onClick={() => handleMenuItemClick('Delete', row.id)}
                                                >
                                                    <ListItemText primary="Delete" />
                                                </ListItem>
                                                <ListItem
                                                    button
                                                    onClick={() => handleMenuItemClick('Member wise status', row.id)}
                                                >
                                                    <ListItemText primary="Member wise status" />
                                                </ListItem>
                                                <ListItem
                                                    button
                                                    onClick={() => handleMenuItemClick('Heat Map', row.id)}
                                                >
                                                    <ListItemText primary="Heat Map based on chat activity" />
                                                </ListItem>
                                            </List>
                                        </Popover>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {renderPagination()}
            </div>

            {/* Drawer for Send Sandes Message */}
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ p: 4, width: '100%', maxWidth: 600, mx: 'auto' }}
                >
                    <Typography variant="h6" gutterBottom>
                        Fill in your info
                    </Typography>

                    {/* Dropdown */}
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

                    {/* Text Area */}
                    <TextField
                        fullWidth
                        margin="normal"
                        name="message"
                        label="Message"
                        multiline
                        rows={4}
                    />

                    {/* Checkboxes */}
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

                    {/* Image Upload */}
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

                    {/* Show Image Preview */}
                    {imagePreview && (
                        <Box mt={2}>
                            <img
                                src={imagePreview}
                                alt="Preview"
                                style={{ width: '100%', maxHeight: 200, objectFit: 'contain' }}
                            />
                        </Box>
                    )}

                    {/* Read-only Field */}
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Read-Only Field"
                        value="This is read-only"
                        InputProps={{
                            readOnly: true,
                        }}
                    />

                    {/* Buttons */}
                    <Box display="flex" justifyContent="space-between" mt={3}>
                        <Button variant="outlined" onClick={toggleDrawer(false)}>Cancel</Button>
                        <Button variant="contained" color="primary">Send Email</Button>
                        <Button variant="contained" color="secondary">Send SMS</Button>
                    </Box>
                </Box>
            </Drawer>

            <Footer />
        </>
    );
}

export default OrganizationUnitDash;
