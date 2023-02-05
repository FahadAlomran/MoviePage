import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Movie from './component/Movie'
import { SimpleGrid } from '@chakra-ui/react'
import Footer from './component/Footer'
import MoveHome from './component/MoveHome'
import Nav from './component/Nav'
import {Routes,Route} from 'react-router-dom'
import TvShowHome from './component/TvShowHome'
import Home from './component/Home'

function App() {
 

  return (
    
      <div>
        <Nav/>
        <Routes>

<Route path='/' element={<Home/>}></Route>
<Route path='/TvShow' element={<TvShowHome/>}></Route>
<Route path='/Movie' element={<MoveHome/>}></Route>

</Routes> 
 <Footer/>
    </div>
  )
}

export default App
