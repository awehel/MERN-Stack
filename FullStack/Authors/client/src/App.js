import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './view/Main';
import NewAuthor from './view/NewAuthor';
import CreateAuthor from './components/CreateAuthor';
import UpdateAuthor from './components/UpdateAuthor';
import OneAuthor from './components/OneAuthor';
import NotFound from './components/NotFound';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
      <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="*" element={<NotFound/>}/>
              <Route path="/" element={<Main/>}/>
              <Route path="/new" element={<CreateAuthor/>}/>
              <Route path="/edit/:id" element={<UpdateAuthor/>}/>
              <Route path ="/author/:id" element={<OneAuthor/>}/>
            </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
