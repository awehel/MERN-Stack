import './App.css';
import React, {useState} from 'react'
import Form from './components/Form';
import Display from './components/Display';

function App() {
  
  const [personObject, setPersonObject] = useState({})
  
  return (
    <div className="App">
      <Form 
        personObject={personObject}
        setPersonObject={setPersonObject}
      />
      <Display
        personObject={personObject}
      />
    </div>
  );
}

export default App;
