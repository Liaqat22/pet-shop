import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Customers from './pages/Customers'
// import Overview from './pages/Overview'
// import Integration from './pages/Integration'
// import Settings from './pages/Settings'
// import Account from './pages/Account'
// import Error from './pages/Error'
import Layout from './layout/Layout'
import Home from './components/Home'
import About from './components/About'
import DogCards from './components/DogCards'
// import Gernal from './pages/Gernal'


function App() {
  return (
    <>
    <Layout>
    <Routes>
      {/* <Route path='/' element = {<Gernal/>}/> */}

      {/* <Route path='/' element = {<Overview/>}/>
      <Route path='/customers' element = {<Customers/>}/>
      <Route path='/integration' element = {<Integration/>}/>
      <Route path='/settings' element = {<Settings/>}/>
      <Route path='/account' element = {<Account/>}/>
      <Route path='/error' element = {<Error/>}/> */}
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/pet' element = {<DogCards/>}/>
    </Routes>
    </Layout>
    </>
  )
}

export default App
