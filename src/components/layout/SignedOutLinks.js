import React from 'react'
import {NavLink} from 'react-router-dom'


const styles = {
    margin: '0, 20px'
}

const SignedOutLinks = () => {
    return (
        <ul className="right" style={styles}>
        <li></li>
            <li><NavLink to='/signup'>Signup</NavLink></li>
            <li><NavLink to='/signin'>Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks