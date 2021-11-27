import React, { useEffect, useState } from 'react';
import Ride from '../Ride/Ride';

const AllRides = () => {
    const [rides,setRides] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        setLoading(true);
        fetch('https://sleepy-hollows-38364.herokuapp.com/rides')
        .then(res=>res.json())
        .then(data=>setRides(data))
        .finally(()=>{
            setLoading(false);
        })
    },[])

    if(loading){
        return <div className="spinner-grow m-5 p-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    }

    return (            
        <div className="mx-5 mt-5">
        <h2 className="rounded-pill bg-primary mt-2 fw-bold p-2 text-white">Our All Popular Rides</h2>
            <div className="container-fluid bg-trasparent my-3 p-3" style={{position: 'relative'}}>
                 <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                    {
                        rides.map(ride=><Ride
                        key={ride._id}
                        ride={ride}>
                        </Ride>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllRides;