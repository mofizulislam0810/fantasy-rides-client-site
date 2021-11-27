import React from 'react';
import { Link } from 'react-router-dom';

const Ride = (props) => {
    const {_id,title,description,image,price} = props.ride;
    return (
            <div className="col">
                <div className="card h-100 shadow-sm"> <img src={image} className="card-img-top h-50" alt="..."/>
                    <div className="card-body">
                        <div className="clearfix mb-3"> <span className="float-start badge rounded-pill bg-primary">Price</span> <span className="float-end price-hp fw-bold">&#2547; {price}</span> </div>
                        <h5 className="card-title rounded-pill bg-primary fw-bold p-1 text-white">Ride Name: {title}</h5>
                        <h5 className="card-title">{description.slice(0,100)}</h5>
                        <div className="text-center my-4"> <Link to={`/ride/${_id}`} className="btn btn-warning">Booking Now</Link> </div>
                    </div>
                </div>
            </div>
    );
};

export default Ride;