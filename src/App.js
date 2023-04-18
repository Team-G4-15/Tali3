import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import logo from './tali3.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </div>
          <div className="welcome">
            <h1>Welcome to Tali3</h1>
            <img src={logo} alt="logo"/>
            
            <p>Empowering minds, enriching lives.</p>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App