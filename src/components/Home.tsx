import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
     
    return (
        <div className="home-container">
            <div><h1>Home</h1></div>
            <Link to="/Trips" ><button>All trips</button></Link>
            <Link to="/userRegistration" > <button>User registration</button></Link>
            <Link to="/login" ><button>User login</button></Link>
        </div>
    )
}
