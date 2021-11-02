import React from 'react';
import './App.css';
import { Paper } from '@mui/material';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='wrap'>
      <Navbar></Navbar>
      <main>
        <Paper elevation={3}></Paper>
      </main>
    </div>

  );
}

export default App;
