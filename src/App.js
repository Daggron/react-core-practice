import React from 'react';
import Navbar from './components/navbar';
import MainComponent from './components/main'
import './App.css';
import './bootstrap.css';



class App extends React.Component{
  render(){
    return(
     <div className="conatiner">
       <div className="row">
         <div className="col-lg-10 mx-auto">
         <Navbar />
         </div>
        
       </div>
        <div className="row">
          <div className="col-lg-10 mx-auto">
          <MainComponent />
          </div>
       
        </div>
       
     </div>
    )
  }
}

export default App;
