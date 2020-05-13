import React from 'react';
import './App.css';
import Countries from './components/Countries';
import Search from './components/Search';
import Title from './components/Title';
import PropsType from 'prop-types';
import GlobalState from './context/globalContext/GlobalState';
 
const App= ()=> {
    return (
      <GlobalState>
      <div className="container">
        <Search />
        <Title />
        <Countries/>
      </div>
      </GlobalState>
    );
  }

export default App;
