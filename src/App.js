import React from 'react';
import {Router , Route } from 'react-router-dom';
import './App.css';



function App() {
  return (<div>
    <Router>

    <Route path='/' element={tv1}></Route>

    </Router>
   
    </div>
  );
}

export default App;
