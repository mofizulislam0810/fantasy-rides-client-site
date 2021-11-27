import React, { useRef } from 'react';
import { useHistory, useParams } from 'react-router';

const UpdateBooking = () => {
    const history = useHistory();
    const statusRef = useRef();
    const {id} = useParams();
    const update = "Confirm";

    const handleUpdateBooking = e =>{
        const status = statusRef.current.value;
        const updateBooking = {status:status};
        const url = `https://sleepy-hollows-38364.herokuapp.com/booking/${id}`;
        fetch(url,{
            method:'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBooking)
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.modifiedCount>0){
                alert('Updated the Booking.');
                history.push('/allbooking');
            }
        })
        e.preventDefault();
    }

    return (
        <div className="vh-100 form">
            <h2 className="rounded-pill btn btn-secondary m-3 w-50 fw-bold">Update Booking Status Pendding To Confirm</h2>
           <form onSubmit={handleUpdateBooking} className="row g-3 p-3">
           <div className="col-md-12 mb-3">
                <input type="text" ref={statusRef} value={update} className="form-control" id="inputEmail4" disabled/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary w-100">Click For Booking</button>
            </div>
            </form>
        </div>
    );
};

export default UpdateBooking;