import React from 'react';
import AllRides from '../AllRides/AllRides';
import Banner from '../Banner/Banner';
import Contuct from '../Contuct/Contuct';
import NewRides from '../NewRides/NewRides';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllRides></AllRides>
            <NewRides></NewRides>
            <Contuct></Contuct>
        </div>
    );
};

export default Home;