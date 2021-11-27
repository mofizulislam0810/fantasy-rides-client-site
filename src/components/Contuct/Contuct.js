import React from 'react';

const Contuct = () => {
    return (
        <div>
            <div className="container my-3">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="rounded-pill bg-primary p-2 text-white fw-bold">Contuct Us</h2>
                    <ul className="list-unstyled li-space-lg">
                        <li><i className="fas fa-map-marker-alt"></i> &nbsp;Dhaka - Ashulia Hwy, Jamgora 1349</li>
                        <li><i className="fas fa-phone"></i> &nbsp;<a href="tel:00817202212">+88 01700000000</a></li>
                        <li><i className="fas fa-envelope"></i> &nbsp;<a href="mailto:lorem@ipsum.com">lorem@gmail.com</a></li>
                    </ul>
                </div> 
            </div> 
            <div className="row">
                <div className="col-lg-12">
                    <form>
                        <div className="col-lg-12 mb-3">
                            <input type="text" className="form-control" placeholder="Name" required/>
                        </div>
                        <div className="col-lg-12 mb-3">
                            <input type="email" className="form-control" placeholder="Email" required/>
                        </div>
                        <div className="col-lg-12 mb-3">
                            <textarea className="form-control" placeholder="Message" required></textarea>
                        </div>
                        <div className="col-lg-12 mb-5">
                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                        </div>
                    </form>
                   

                </div> 
            </div> 
        </div> 
            
        </div>
    );
};

export default Contuct;