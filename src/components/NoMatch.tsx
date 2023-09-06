import React from 'react'
import { Link } from 'react-router-dom'

export default function(){
    return (
        <div>
            <h2>404: Page Not Found</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
            <Link to="/" ><button>Home</button></Link>
        </div>
    )
}
