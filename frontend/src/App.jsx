import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Start from './pages/Start.jsx'
import CaptainLogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper.jsx'
import UserLogout from './pages/UserLogout.jsx'
import CaptainHome from './pages/CaptainHome.jsx'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper.jsx'
import Riding from './pages/Riding'
import CaptainRideDetails from './pages/CaptainRideDetails.jsx'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/CaptainLogin" element={<CaptainLogin />} />
        <Route path="/CaptainSignup" element={<CaptainSignup />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/Riding" element={<Riding />} />
        <Route path="/UserSignup" element={<UserSignup />} />
        <Route path="/home" element={<UserProtectWrapper><Home /></UserProtectWrapper>} />
        <Route path='/user/logout' element={<UserProtectWrapper><UserLogout /></UserProtectWrapper>} />
        <Route path='/CaptainHome' element={<CaptainProtectWrapper><CaptainHome /></CaptainProtectWrapper>} />
        <Route path='/CaptainRideDetails' element={<CaptainProtectWrapper><CaptainRideDetails /></CaptainProtectWrapper>} />
      </Routes>



    </div>
  )
}

export default App;