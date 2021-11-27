import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const RideDetail = () => {
    const {rideid} = useParams();
    const [ride,setRide] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        setLoading(true);
        fetch(`https://sleepy-hollows-38364.herokuapp.com/ride/${rideid}`)
        .then(res=>res.json())
        .then(data=>setRide(data))
        .finally(()=>{
            setLoading(false);
        })
    },[]);

    const {_id,title,description,image,price} = ride;

    
    if(loading){
        return <div className="spinner-grow m-5 p-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    }
    
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row alin-item-center m-5">
                    <div className="col-md-6 col-12">
                         <div className="d-flex justify-content-center">
                             <img className="rounded" src={image} alt="..." width="100%"/> 
                         </div>
                     </div>
                     <div className="col-md-6 col-12">
                         <div className="p-0">
                            <h3 className="fw-bold mb-3"><b>Ride title: {title}</b></h3> 
                            <p className="m-3"><b>Description:</b> {description}</p>
                             <h3 className="fw-bold m-3">Price: &#2547; {price}</h3>
                             <Link className="btn btn-outline-primary w-100" to={`/booking/${_id}`}>Book Now</Link>
                        </div>
                    </div>
                 </div>
            </div>
         </div>
    );
};

export default RideDetail;