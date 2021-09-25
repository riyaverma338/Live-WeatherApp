import React from 'react';
import './App.css';
import './css/Weatherapp.css';
import Weatherapp from './component/Weatherapp';
const dotenv = require("dotenv");
dotenv.config({path:'./config.env'});
const API = process.env.API_KEY;

function App() {
  return (
    <div>
      <Weatherapp/>
    </div>
  );
}

export default App;
