import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/Home'
import About from './components/About'
import DogCards from './components/DogCards'


function App() {
  return (
    <>
    <Layout>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/pet' element = {<DogCards/>}/>
    </Routes>
    </Layout>
    </>
  )
}

export default App
