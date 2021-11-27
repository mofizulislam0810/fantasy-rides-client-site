import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navbar.css';

const Navbar = () => {
    const {user,logout} = useAuth();
    return (
        <div>
            <nav className="navbar bg-primary navbar-expand-lg fixed-top navbar-light">
            <div className="container-fluid">
            <Link className="navbar-brand ms-5 text-white" to="/home">
            <b>Fantasy-Rides</b>
             </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 me-5 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link text-white" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-white" to="/about">About</Link>
                    </li>
                    {
                        user?.email ? <><li className="nav-item">
                        <Link className="nav-link text-white" to="/addride">Add Ride</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-white" to="/mybooking">My Booking</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-white" to="/allbooking">All Booking</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-white">{user.displayName}</Link>
                        </li>
                        <li className="nav-item">
                        <button className="btn btn-warning" onClick={logout}>Log Out</button>
                        </li></>: <div>
                        <li className="nav-item">
                         <Link className="nav-link text-white" to="/login">Login</Link>
                         </li>
                        </div>
                    }
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;