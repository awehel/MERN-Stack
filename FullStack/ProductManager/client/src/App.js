import './App.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Detail from './components/Detail';
import Main from './views/Main';
import React, {useState} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/home" default/>
          
          <Route element={<Detail/>} path="/home/:id" />
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
