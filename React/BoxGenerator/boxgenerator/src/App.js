import './App.css';
import React, {useState} from 'react';
import AddBox from './components/AddBox';
import ShowBox from './components/ShowBox';

function App() {
  
    const [boxColorArr, setBoxColorArr] = useState([])

    
  return (
    <div className="App">
     
      <h1>Boxes</h1>
      <AddBox
        boxColorArr={boxColorArr}
        setBoxColorArr={setBoxColorArr}
      />

      <ShowBox boxColorArr={boxColorArr} />

    </div>
  );
}

export default App;
