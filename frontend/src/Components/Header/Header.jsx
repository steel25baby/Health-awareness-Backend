import React from 'react'
import "./Header.css";
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section className='Header'>
        <div className='Header-heading'>
            <img src={Logo} alt="" />
            <h1>Health Awareness platform</h1>
        </div>
        <div className='Header-nav'>
            <ol className='Header-nav-list'>
                <li className='Header-nav-item'>
                    <Link to="/">home</Link>
                </li>
                <li className='Header-nav-item'>
                    <Link to="/diseases">diseases</Link>
                </li>
                <li className='Header-nav-item'>
                    <Link to="/treatment">treatment</Link>
                </li>
                <li className='Header-nav-item'>
                    <Link to="/services">services</Link>
                </li>
                <li className='Header-nav-item'>
                    <Link to="/contact">contact</Link>
                </li>
            </ol>
                <div className='Header-ctas'>
                    <Link className="First-btn" to="/Login">
                login
                     </Link>
                     <Link className="Second-btn" to="/Signup">
                sign up
                    </Link>

            </div>

        </div>

    </section>
  )
}

export default Header