import React from 'react'
import Home from '../src/Home'
import Error from './Error'
import {Routes,Route} from"react-router-dom"
import SiingleMovie from './SiingleMovie'
import "../src/App.css"


// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
const App = () => {
  return (
  
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='movie/:id' element={<SiingleMovie/>} />
      <Route path='*' element={<Error/>} />

      </Routes>
    
    
  )
}

export default App