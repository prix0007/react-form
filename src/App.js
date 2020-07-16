import React from 'react';
import './App.css';
import Form from './components/Form'

//MUI Imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5">
              Simple React Form 
            </Typography>
          </Toolbar>
        </AppBar>
        <hr />
        <br />
        <Form />
    </div>
  );
}

export default App;
