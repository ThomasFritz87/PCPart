import { useState } from 'react'
import './App.css'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Main from "./components/main"

function App() {

  return (
    <>
      <Router>
            <Routes>
              <Route path="/" element={<Main category="Home"/>}/>

              <Route path="/home" element={<Main category="Home"/>}/>
              <Route path="/office" element={<Main category="Office"/>}/>
              <Route path="/gaming" element={<Main category="Gaming"/>}/>
              <Route path="/highend" element={<Main category="Highend"/>}/>

              <Route path="/processor" element={<Main category="Prozessor"/>}/>
              <Route path="/graphics" element={<Main category="Grafikkarte"/>}/>
              <Route path="/mainboard" element={<Main category="Mainboard"/>}/>
              <Route path="/ram" element={<Main category="Arbeitsspeicher"/>}/>
              <Route path="/ssd" element={<Main category="Festplatte"/>}/>
              <Route path="/cooling" element={<Main category="Kühlung"/>}/>
              <Route path="/case" element={<Main category="Gehäuse"/>}/>
              <Route path="/power" element={<Main category="Netzteil"/>}/>
              <Route path="/monitor" element={<Main category="Monitor"/>}/>
              <Route path="/accessory" element={<Main category="Zubehör"/>}/>
            </Routes>
      </Router>
    </>
  )
}

export default App
