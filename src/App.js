import React from 'react';
import Navbar from './components/navbar';
import MainComponent from './components/main'
import './App.css';
import './bootstrap.css';


class App extends React.Component{
  render(){
    return(
      <React.Fragment>
      
          <Navbar />
          <MainComponent />
         
      </React.Fragment>
    )
  }
}

export default App;
