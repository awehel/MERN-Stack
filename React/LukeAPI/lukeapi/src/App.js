import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React, {useState} from 'react'
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planets';

function App() {
  
  const [searchParam, setSearchParam] = useState("");

  const [paramId, setParamId] = useState("");

  const [person, setPerson] = useState({})

  const [planet, setPlanet] = useState({})

  const [homeworld, setHomeworld] = useState({})
  
  return (
      <BrowserRouter>
          <div className="App">
              <Form
                  searchParam={searchParam}
                  setSearchParam={setSearchParam}
                  paramId={paramId}
                  setParamId={setParamId}
              />
              <Routes>
                  
                  <Route
                    path="/people/:paramId"
                    element={
                          
                      <People
                          person={person}
                          setPerson={setPerson}
                          planet={planet}
                          setPlanet={setPlanet}
                          planet={planet}
                          setPlanet={setPlanet}
                      />
                          
                      }
                  />
                  <Route
                      path="/planets/:paramId"
                      element={
                          <Planets planet={planet} setPlanet={setPlanet} />
                      }
                  />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
