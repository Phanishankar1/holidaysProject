// import './App.css';
import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './home';
import Menu from './menu';
import About from './about';
import Items from './items';
import Success from './customerdetails';
import Success2 from './success'
import Review from './review';
// import Featured from './featured';
// import Old from './old';
import Icecreamdetails from './icecreamdetails';
import Error404 from './error404';
import Contact from './contact';
function App() {
  return(
    <center>
      <BrowserRouter>
      <Menu />
    <Routes>
      <Route path="/"element={<Home />} />
      <Route path="/about"element={<About/>}/>
      <Route path="/items"element={<Items/>}/>
      <Route path="/items/:id"element={<Icecreamdetails/>}/>
      <Route path="/customerdetails"element={<Success/>}/>
      <Route path="/success"element={<Success2/>}/>
      <Route path="/review"element={<Review/>}/>
      <Route path="/contact"element={<Contact/>}/>
        {/* <Route index element={<Featured/>}/>
      <Route path="featured"element={<Featured/>}/>
      <Route path="old"element={<Old/>}/>
      </Route> */}
      <Route path="*"element={<Error404/> }/>
    </Routes>
    </BrowserRouter>
    </center>
  )
};

export default App;
