import React from 'react';
import img from '../../images/Fantasy-Kingdom.png';

const About = () => {
    return (
        <div>
            <div className="container my-5 py-5">
            <div className="row">
                <div className="col-lg-6 col-xl-5">
                    <div className="text-container">
                        <div className="rounded-pill bg-primary mt-5 p-3 text-white fw-bold">About Fantasy-Rides</div>
                        <p className="p-large mt-3">The Fantasy Kingdom Theme Park, commonly known as Fantasy Kingdom, is an entertainment complex in Ashulia, Savar, Bangladesh. Opened on 19 February 2002, the theme park is owned and operated by Concord Entertainment Co. Ltd, a sister concern of Concord Group. The property covers nearly 80 acres, featuring one theme park, one water parks, dry park and Heritage Corner. Fantasy Kingdom Complex is built in Jamgora at Ashulia which is nearby Dhaka city. The property includes the cities of Ashulia and Savar which are governed by the Dhaka District. There are currently many routes available to reach Fantasy Kingdom</p>
                        <button className="rounded-pill btn btn-warning my-2 px-5 fw-bold">We Are Waiting...</button>
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

export default About;