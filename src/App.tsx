import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UseBoolean from './components/useBoolean/UseBoolean';
import UseClickAnyWhere from './components/useClickAnyWhere/UseClickAnyWhere';
import UseCopyToClipboard from './components/useCopyToClipboard/UseCopyToClipboard';
import UseCountDown from './components/useCountDown/UseCountDown';
import CustomUseBoolean from './components/useBoolean/CustomUseBoolean';
import CustomUseClickAnyWhere from './components/useClickAnyWhere/CustomUseClickAnyWhere';
import CustomUseCopyClipboard from './components/useCopyToClipboard/CustomUseCopyClipboard';
import CustomUseCountDown from './components/useCountDown/CustomUseCountDown';

function App() {
  return (
    <div className="App">
      {/* UseBoolean */}
      {/* <UseBoolean /> */}
      {/* <CustomUseBoolean /> */}

      {/* UseClickAnyWhere */}
      {/* <UseClickAnyWhere /> */}
      {/* <CustomUseClickAnyWhere /> */}

      {/* UseCopyToClipboard */}
      {/* <UseCopyToClipboard /> */}
      {/* <CustomUseCopyClipboard /> */}

      {/* UseCountDown */}
      {/* <UseCountDown /> */}
      <CustomUseCountDown />
    </div>
  );
}

export default App;
