import * as React from 'react';
import {
  AppBar, Box, Toolbar, IconButton, Typography, Badge, MenuItem, Menu,
  Dialog, TextField, Button,
  Grid
} from '@mui/material';
import {
  Menu as MenuIcon, AccountCircle, Mail as MailIcon,
  Notifications as NotificationsIcon, MoreVert as MoreIcon
} from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMobile, faChartLine, faBuildingColumns, faBars
} from '@fortawesome/free-solid-svg-icons';

export default function NavbarDash() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElProfile, setAnchorElProfile] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [orgModalOpen, setOrgModalOpen] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isProfileMenuOpen = Boolean(anchorElProfile);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleProfileMenuOpen = (event) => setAnchorElProfile(event.currentTarget);
  const handleMobileMenuOpen = (event) => setMobileMoreAnchorEl(event.currentTarget);

  const handleMenuClose = () => {
    setAnchorEl(null);
    setAnchorElProfile(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const handleOrgManagementClick = () => {
    setOrgModalOpen(true);
    handleMenuClose();
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id="org-menu"
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {[
        "Organization Management", "Organization Units", "Designations",
        "Members", "Search/Locate Member", "Groups", "Import Employees"
      ].map((item) => (
        <MenuItem
          key={item}
          onClick={() => {
            if (item === "Organization Management") {
              handleOrgManagementClick();
            } else if (item === "Organization Units") {
              window.location.href = "/OrganizationUnit";
            } else {
              handleMenuClose();
            }
          }}
        >
          {item}
        </MenuItem>
      ))}
    </Menu>
  );

  const renderMenuProfile = (
    <Menu
      anchorEl={anchorElProfile}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id="profile-menu"
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isProfileMenuOpen}
      onClose={handleMenuClose}
    >
      {[
        "Sign in as MINISTRY ADMIN Ministry for POC",
        "Signed in as O ADMIN Organization for POC",
        "Sign in as OU ADMIN OU for POC",
        "Logged in as 9984261451",
        "Logout"
      ].map((item) => (
        <MenuItem key={item} onClick={handleMenuClose}>{item}</MenuItem>
      ))}
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id="primary-search-account-menu-mobile"
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" href='/Dlinks' color="inherit">
          <Badge badgeContent={4} color="error">
            <FontAwesomeIcon icon={faMobile} />
          </Badge>
        </IconButton>
        <p>App Download</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" href='/Dashboard' color="inherit">
          <Badge badgeContent={4} color="error">
            <FontAwesomeIcon icon={faChartLine} />
          </Badge>
        </IconButton>
        <p>Graph</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="error">
            <FontAwesomeIcon icon={faBuildingColumns} />
          </Badge>
        </IconButton>
        <p>Nevigate</p>
      </MenuItem>
      <MenuItem onClick={handleMenuOpen}>
        <IconButton size="large" aria-label="account of current user" color="inherit">
          <FontAwesomeIcon icon={faBars} />
        </IconButton>
        <p>Menu</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton size="large" aria-label="account of current user" color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, mt: "1%" }}>
      <Toolbar>
        <img src="assets/images/ashok.png" alt="logo" loading="lazy" width="40px" style={{ marginRight: '25px' }} />
        <img src="assets/images/sandes_logo.png" alt="logo" loading="lazy" width="65px" />

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton size="large" href='/Dlinks' color="inherit">
            <Badge badgeContent={4} color="error">
              <FontAwesomeIcon icon={faMobile} />
            </Badge>
          </IconButton>
          <IconButton size="large" href='/Dashboard' color="inherit">
            <Badge badgeContent={17} color="error">
              <FontAwesomeIcon icon={faChartLine} />
            </Badge>
          </IconButton>
          <IconButton size="large" color="inherit">
            <Badge badgeContent={20} color="error">
              <FontAwesomeIcon icon={faBuildingColumns} />
            </Badge>
          </IconButton>
          <IconButton size="large" onClick={handleMenuOpen} color="inherit">
            <FontAwesomeIcon icon={faBars} />
          </IconButton>
          <IconButton size="large" onClick={handleProfileMenuOpen} color="inherit">
            <AccountCircle />
          </IconButton>
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton size="large" onClick={handleMobileMenuOpen} color="inherit">
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {renderMobileMenu}
      {renderMenu}
      {renderMenuProfile}

      {/* Modal for Organization Management */}
      <Dialog open={orgModalOpen} onClose={() => setOrgModalOpen(false)}>
        <Box sx={{ p: 3, minWidth: 500 }}>
          <Typography variant="h6" mb={2}>Update Organization</Typography>
          <form>

            <Typography variant="h6" mb={2} textAlign="center">Ministry for POC</Typography>

            <div className="row">
              <div className="col-md-6 mt-3">
                <input class="form-control" type="text" placeholder="Organization code" aria-label="default input example" />
              </div>
              <div className="col-md-6  mt-3">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Organization Visibility</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-md-6  mt-3">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Organization type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-md-6  mt-3">
                <input class="form-control" type="text" placeholder="Organization name" aria-label="default input example" />
              </div>
              <div className="col-md-6  mt-3">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Public Visibility</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

            </div>
            <button type="submit" class="btn btn-primary m-3">Update</button>
            <button type="submit" class="btn btn-danger">Close</button>
          </form>
        </Box>
      </Dialog>
    </Box>
  );
}

