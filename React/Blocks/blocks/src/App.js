import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Subcontent from './components/Subcontent';
import Advertisement from './components/Advertisement';
 
                
function App() {
  
  const divStyle = {
    height:'1000px',
    width: 'auto',
    background: '#dddddd',
    padding: '10px',
    // display:'flex'
    
  }
  
  return (
    <div className="app" style={divStyle}>
        <Header />
        <Navigation />
        <Main>
            <Subcontent />
            <Subcontent />
            <Subcontent />
            <Advertisement />
        </Main>
    </div>
  );
}
                
export default App;