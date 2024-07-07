import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Diseases from './Pages/Diseases/Diseases';
import Treatment from './Pages/Treatment/Treatment';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header/>

    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/diseases'element={<Diseases/>}/>
      <Route path='/treatment'element={<Treatment/>}/>
      <Route path='/services'element={<Services/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/Login'element={<Login/>}/>
      <Route path='/Signup'element={<Signup/>}/>
    </Routes>

    <Footer/>
    </BrowserRouter>
     
    </>
  )
}

export default App
