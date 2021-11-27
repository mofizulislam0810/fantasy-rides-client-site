import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import './AddRide.css'

const AddRide = () => {
    const history = useHistory();
    const titleRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const imageRef = useRef();
    const handleAddRide = e =>{
        const title = titleRef.current.value;
        const price = priceRef.current.value;
        const description = descriptionRef.current.value;
        const image = imageRef.current.value;
        const newRide = {title:title,price:price,description:description,image:image};
        fetch('https://sleepy-hollows-38364.herokuapp.com/rides',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newRide)
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Successfully added the ride.')
                e.target.reset();
                history.push('/home');
            }
        })
        e.preventDefault();
    }
    return (
        <div className="vh-100 form">
            <h2 className="rounded-pill btn btn-secondary m-3 w-50 fw-bold">Add New Ride In Popular Section</h2>
           <form onSubmit={handleAddRide} className="row g-3 p-3">
            <div className="col-md-12 mb-3">
                <input type="text" ref={titleRef} className="form-control" id="inputEmail4" placeholder="Ride Title"/>
            </div>
            <div className="col-md-12 mb-3">
                <input type="number" ref={priceRef} className="form-control" id="inputDate" placeholder="Ride Price"/>
            </div>
            <div className="col-12 mb-3">
                <textarea type="text" ref={descriptionRef} className="form-control" id="inputAddress" placeholder="Ride Description" style={{height: "100px"}}/>
            </div>
            <div className="col-12 mb-3">
                <input type="text" ref={imageRef}className="form-control" id="inputAddress2" placeholder="Ride Image Url"/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary w-100">Add Ride</button>
            </div>
            </form>
        </div>
    );
};

export default AddRide;