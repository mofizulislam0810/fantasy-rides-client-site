import React from 'react';
import './Banner.css';
import imgOne from '../../images/Gran_Fiesta.jpg';
import imgTwo from '../../images/JSJKGXJRQFH4NPTJBCKMSB2MWY.jpg';
import imgThree from '../../images/slider1.jpg';

const Banner = () => {

    return (
        <div>
          <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={imgThree} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={imgTwo} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={imgOne} className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          </div>
      </div>
    );
};

export default Banner;