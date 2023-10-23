import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UseBoolean from './components/useBoolean/UseBoolean';
import UseClickAnyWhere from './components/useClickAnyWhere/UseClickAnyWhere';

function App() {
  return (
    <div className="App">
      {/* <UseBoolean /> */}
      <UseClickAnyWhere />
    </div>
  );
}

export default App;
