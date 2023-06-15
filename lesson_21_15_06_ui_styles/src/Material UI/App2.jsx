import React from 'react';
import './App2.css';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu } from '@mui/icons-material';

const App2 = () => {
  return (
    <div>
      <AppBar>
        <Container>
          <Toolbar>
            <IconButton aria-label='menu'></IconButton>
            <Menu />
            <Typography>Header</Typography>
            <Box>
              <Button color='secondary'>Secondary</Button>
              <Button color='success' variant='contained'>
                Text
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default App2;
