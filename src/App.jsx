import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import DeleteIcon from "@mui/icons-material/Delete";
import Chip from "@mui/material/Chip";
import profilePic from './assets/images/image.svg' 

function App() {
  return (
    <>
      <CssBaseline />

      {/* TOP NAVIGATION */}
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="body2" color="textSecondary">
            📂 Pages / Account / <strong>Settings</strong>
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search here"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <IconButton>
              <SettingsIcon />
            </IconButton>
            <IconButton>
              <NotificationsActiveIcon color="error" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 3 }}>
        <Grid container spacing={3}>
          {/* SIDEBAR */}
          <Grid item xs={12} md={3}>
            <Paper sx={{ p: 2 }}>
              <List component="nav">
                <ListItemButton selected>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <LockIcon />
                  </ListItemIcon>
                  <ListItemText primary="Basic Info" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <VerifiedUserIcon />
                  </ListItemIcon>
                  <ListItemText primary="Change Password" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText primary="2FA" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <NotificationsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Notifications" />
                </ListItemButton>
                <ListItemButton sx={{ color: "red" }}>
                  <ListItemIcon>
                    <DeleteIcon sx={{ color: "red" }} />
                  </ListItemIcon>
                  <ListItemText primary="Delete Account" />
                </ListItemButton>
              </List>
            </Paper>
          </Grid>

          {/* MAIN CONTENT */}
          <Grid item xs={12} md={9}>
            <Paper sx={{ p: 3 }}>
              {/* PROFILE HEADER */}
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar src={profilePic} sx={{ width: 80, height: 80 }} /> {/* Image added here */}
                <Box>
                  <Typography variant="h6">Richard Davis</Typography>
                  <Typography variant="body2" color="textSecondary">
                    CEO / Co-Founder
                  </Typography>
                </Box>
              </Stack>

              <Divider sx={{ my: 3 }} />

              {/* BASIC INFO FORM */}
              <Typography variant="h6" gutterBottom>
                Basic Info
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="First Name" defaultValue="Alec" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="Last Name" defaultValue="Thompson" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="I'm" defaultValue="Male" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body2" gutterBottom>
                    Birth Date
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <Select defaultValue="February">
                      <MenuItem value="January">January</MenuItem>
                      <MenuItem value="February">February</MenuItem>
                      <MenuItem value="March">March</MenuItem>
                    </Select>
                    <Select defaultValue="1">
                      {Array.from({ length: 31 }, (_, i) => (
                        <MenuItem key={i + 1} value={i + 1}>
                          {i + 1}
                        </MenuItem>
                      ))}
                    </Select>
                    <Select defaultValue="2020">
                      {Array.from({ length: 50 }, (_, i) => (
                        <MenuItem key={1975 + i} value={1975 + i}>
                          {1975 + i}
                        </MenuItem>
                      ))}
                    </Select>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="Email" defaultValue="example@email.com" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="Confirm Email" defaultValue="example@email.com" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="Your Location" defaultValue="Sydney, AU" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="Phone Number" defaultValue="+40 735 631 620" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Language" defaultValue="English" />
                </Grid>
              </Grid>

              {/* TECHNOLOGY STACK */}
              <Box sx={{ mt: 3 }}>
                <Typography variant="body1" gutterBottom>
                  Technologies:
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Chip label="Vue.js" variant="outlined" />
                  <Chip label="Angular" variant="outlined" />
                  <Chip label="React" variant="outlined" />
                </Stack>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
