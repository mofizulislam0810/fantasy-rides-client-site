import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const {user} = useAuth();
    const {bookid} = useParams();
    const [booking,setBooking] = useState([]);
    const history = useHistory();
    const nameRef = useRef();
    const emailRef = useRef();
    const idRef = useRef();
    const titleRef = useRef();
    const priceRef = useRef();
    const statusRef = useRef();
    const descriptionRef = useRef();
    const imageRef = useRef();

    useEffect(()=>{
        fetch(`https://sleepy-hollows-38364.herokuapp.com/ride/${bookid}`)
        .then(res=>res.json())
        .then(data=>setBooking(data))
    },[]);

    const {_id,title,description,price,image} = booking;

    const pendding = 'pendding';

    const handleBooking = e =>{
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const id = idRef.current.value;
        const title = titleRef.current.value;
        const price = priceRef.current.value;
        const status = statusRef.current.value;
        const description = descriptionRef.current.value;
        const image = imageRef.current.value;
        const newBooking = {id:id,name:name,email:email,title:title,price:price,status:status,description:description,image:image};
        fetch('https://sleepy-hollows-38364.herokuapp.com/booking',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newBooking)
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Successfully added the Booking.')
                e.target.reset();
                history.push('/mybooking');
            }
        })
        e.preventDefault();
    }

    return (
        <div className="vh-100 form">
            <h2 className="rounded-pill btn btn-secondary m-3 w-50 fw-bold">Ride Booking For New Exprience</h2>
           <form onSubmit={handleBooking} className="row g-3 p-3">
           <div className="col-md-12 mb-3">
                <input type="hidden" ref={idRef} value={_id} className="form-control" id="inputEmail4" disabled/>
            </div>
           <div className="col-md-12 mb-3">
                <input type="text" ref={nameRef} value={user.displayName} className="form-control" id="inputEmail4" disabled/>
            </div>
            <div className="col-md-12 mb-3">
                <input type="text" ref={emailRef} value={user.email} className="form-control" id="inputEmail4" disabled/>
            </div>
            <div className="col-md-12 mb-3">
                <input type="text" ref={titleRef} value={title} className="form-control" id="inputEmail4" disabled/>
            </div>
            <div className="col-md-12 mb-3">
                <input type="number" ref={priceRef} value={price} className="form-control" id="inputDate" disabled/>
            </div>
            <div className="col-md-12 mb-3">
                <textarea type="text" ref={descriptionRef} value={description} className="form-control" id="inputDate" disabled/>
            </div>
            <div className="col-md-12 mb-3">
                <input type="text" ref={imageRef} value={image} className="form-control" id="inputDate" disabled/>
            </div>
            <div className="col-12 mb-3">
                <input type="hidden" ref={statusRef} value={pendding} className="form-control" id="inputAddress2" disabled/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary w-100">Click For Booking</button>
            </div>
            </form>
        </div>
    );
};

export default Booking;