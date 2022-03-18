import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './view/Main';
import NewAuthor from './view/NewAuthor';
import CreateAuthor from './components/CreateAuthor';
import UpdateAuthor from './components/UpdateAuthor';


function App() {
  return (
      <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/new" element={<CreateAuthor/>}/>
              <Route path="/edit/:id" element={<UpdateAuthor/>}/>

            </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
