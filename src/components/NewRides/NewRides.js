import React from 'react';
import img from '../../images/Haunted-Mansion-attic.jpg';

const NewRides = () => {
    return (
        <div>
            <div className="container my-5 py-5">
            <div className="row my-4">
                <div className="col-lg-6 col-xl-5">
                    <div className="text-container">
                        <div className="rounded-pill bg-primary mt-3 p-2 text-white fw-bold">Our Upcoming Rides</div>
                        <h1 className="m-3">The Haunted Mansion</h1>
                        <p className="p-large">The "Happiest Place on Earth" gets a bit scary with the Haunted Mansion, another juggernaut of an amusement park attraction created by the fine folks at Disney. The ride opened in August 1969 in Disneyland and featured ghosts, murderous brides, blood-spilling families, and a host of other specters designed to scare park-goers silly as they ride through in a "doom buggy." The Haunted Mansion is among the most popular Disney rides in history, and it even inspired a movie: "The Haunted Mansion," starring Eddie Murphy, was released in 2003.</p>
                        <button className="rounded-pill btn btn-warning my-2 px-5 fw-bold">Early Booking</button>
                    </div> 
                </div> 
                <div className="col-lg-6 col-xl-7">
                    <div className="image-container">
                        <img className="rounded img-fluid" src={img} alt="alternative"/>
                    </div> 
                </div>
            </div>
         </div>
    </div>
    );
};

export default NewRides;