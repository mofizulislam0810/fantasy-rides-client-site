import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyBookings = () => {
    const {user} = useAuth();
    const [bookings,setBookings] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        setLoading(true);
        fetch('https://sleepy-hollows-38364.herokuapp.com/booking')
        .then(res=>res.json())
        .then(data=>setBookings(data))
        .finally(()=>{
            setLoading(false);
        })
    },[]);
    const myBooking = bookings.filter(booking=> booking.email === user.email);

    const handleDeleteBooking = id =>{
        const proceed = window.confirm('Are you sure, you want to delete?');
        if(proceed){
            const url = `https://sleepy-hollows-38364.herokuapp.com/booking/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => { 
                if(data.deletedCount > 0){
                    alert('Deleted Successfully');
                    const remainingBookings = bookings.filter(booking=> booking._id !== id);
                    console.log(remainingBookings);
                    setBookings(remainingBookings);
                }
            })
        }
    }

    if(loading){
        return <div className="spinner-grow m-5 p-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    }
    
    return (
        <div className="m-5 py-5">
            <h2 className="rounded-pill btn btn-secondary w-50 fw-bold">Show All Booking Which Booked By Me</h2>
            <div className="container-fluid bg-trasparent my-4 p-3" style={{position: 'relative'}}>
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
            {
                myBooking.map(booking=>
             <div className="col">
                <div className="card h-100 shadow-sm"> <img src={booking.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <div className="clearfix mb-3"> <span className="float-start badge rounded-pill bg-primary">{booking.status}</span> <span className="float-end price-hp fw-bold">&#2547; {booking.price}</span> </div>
                        <h5 className="card-title rounded-pill bg-primary fw-bold p-1 text-white">Ride Name: {booking.title}</h5>
                        <h5 className="card-title">{booking.description.slice(0,100)}</h5>
                        <div className="text-center my-4"> <button className="btn btn-warning" onClick={()=>handleDeleteBooking(booking._id)}>Delete</button> </div>
                    </div>
                </div>
            </div>
            )
            }
            </div>
            </div>
        </div>
    );
};

export default MyBookings;