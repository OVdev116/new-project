import { useState } from 'react'
import './App.css'
import Filter from './Filter'
import Header from './Header'
import List from './List'

function App() {
  return (
    <div className="App">
     <Header/>
     <div className="content">
     <Filter/>
     <List/>
     </div>
   
    </div>
  )
}

export default App
