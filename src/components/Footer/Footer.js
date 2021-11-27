import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <div>
    <footer className="w-100 bg-dark py-4 flex-shrink-0">
        <div className="container py-4">
            <div className="row gy-4 gx-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="fw-bold text-white">Fantasy-Rides</h5>
                    <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved.</p>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Quick links</h5>
                    <ul className="list-unstyled text-muted">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Quick links</h5>
                    <ul className="list-unstyled text-muted">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-3 fw-bold">Fantasy Email</h5>
                    <form action="#">
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Recipient's email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
        </div>
    );
};

export default Footer;