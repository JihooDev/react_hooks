import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UseBoolean from './components/useBoolean/UseBoolean';
import UseClickAnyWhere from './components/useClickAnyWhere/UseClickAnyWhere';
import UseCopyToClipboard from './components/useCopyToClipboard/UseCopyToClipboard';

function App() {
  return (
    <div className="App">
      {/* <UseBoolean /> */}
      {/* <UseClickAnyWhere /> */}
      <UseCopyToClipboard />
    </div>
  );
}

export default App;
