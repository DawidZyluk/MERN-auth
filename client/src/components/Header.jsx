import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: "none", color: "white" }}>
            MERN-auth
          </Typography>
          <Button color="inherit" component={NavLink} to='/login'>Login</Button>
          <Button color="inherit" component={NavLink} to='/register'>Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
