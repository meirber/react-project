import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import UserLogin from './components/UserLogin'
import Trips from './components/Trips'
import TripDetail from './components/TripDetail'
import NewTripForm from './components/NewTripForm'
import UpdateTripForm from './components/UpdateTripForm'
import UserRegistration from './components/UserRegistration'
import NoMatch from './components/NoMatch'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trips" element={<Trips />} />
                <Route path='/tripDetail/:id' element={<TripDetail />} />
                <Route path='/newTrip' element={<NewTripForm />} />
                <Route path='/updateTrip' element={<UpdateTripForm />} />
                <Route path='/userRegistration' element={<UserRegistration />} />
                <Route path="/login" element={<UserLogin />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </Router>
    )
}

export default App
