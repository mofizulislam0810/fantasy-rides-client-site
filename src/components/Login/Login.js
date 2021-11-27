import React from 'react';
import { useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    const img = 'https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png';

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }

    return (
        <div>
           <section className="vh-100" style={{backgroundColor: 'white'}}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                    <div className="card text-black" style={{borderRadius: '25px'}}>
                    <div className="card-body p-md-5">
                        <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log In</p>
                            <div className="d-flex flex-row align-items-center mb-3">
                            <i className="fas fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                <button type="submit" onClick={handleGoogleLogin} class="btn btn-danger btn-lg btn-block w-100"><i class="fab fa-google me-2"></i>Continue with Google</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                     <img src={img} className="img-fluid" alt="Sampleimage"/>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    );
};

export default Login;