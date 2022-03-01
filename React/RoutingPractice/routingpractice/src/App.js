import './App.css';
import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom'

const Home = (props) =>{
  return(
    <div>
        <h2>Welcome</h2>
    </div>
  )
}

const Other = (props) =>{
  
  const {text} = useParams()
  const {font} = useParams()
  const {background} = useParams()

  return(
    <div>
      {
        isNaN(text)?
        <h3 style={{color: font, background:background}}>The word is: {text}</h3>:
        <h3 style={{color: font, background:background}}> The number is {text}</h3>
      }
      {
        console.log(text + " " + font + " " + background )
      }
    </div>
  )
}

function App() {
  return (
      <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/home" element={<Home />}/>
              <Route path="/:text" element={<Other />}/>
              <Route path="/:text/:font/:background" element={<Other />}/>
              
              

            </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
