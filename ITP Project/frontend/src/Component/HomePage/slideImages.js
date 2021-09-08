import React from 'react'
import img1 from '../../images/Screenshot (1).png';
import img2 from '../../images/Screenshot (238).png';
import img3 from '../../images/Screenshot (242).png';
import styled from 'styled-components';

const slideImages = () => {
    return (
        <SlidesContainer>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={img1} alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={img2} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img3} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" style={{color:'black'}} aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </SlidesContainer>
    )
}

export default slideImages;

//SlidesContainer
const SlidesContainer =styled.div`
      
       img{
           height:400px;
           width:100%;
       }
       .carousel-control-prev-icon{
           color:(var --dark-green) !important;
       }


`;