import React from 'react'
import { Carousel } from 'react-bootstrap'
import './DisneyCarousel.css'



export default function DisneyCarousel() {
 
  return (
    <Carousel>
     <Carousel.Item className="img-size">
      <img
        className="img-size"
        src="https://www.studentnewsdaily.com/wp-content/uploads/2017/04/UK-Supreme-court-rules-father-must-pay-fine-1.jpg"
        alt="the gang is all here. With Minnie and Mickey leading the way"
       />
     </Carousel.Item>
     <Carousel.Item className="img-size">
     <img
      className="img-size"
      src="https://images.unsplash.com/photo-1616097970275-1e187b4ce59f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      alt="Woody introduces you to Toy Story Land"
     />
       
     </Carousel.Item>
     <Carousel.Item className="img-size">
     <img
      className="img-size"
      src="https://dpep.disney.io/wp-content/uploads/2018/11/parks_dlr_hero_incredicoaster_1_1280x720_112018-960x540.jpg"
      alt="Mr and Misses Incredible pose with some guests"
     />
       
     </Carousel.Item>
     <Carousel.Item className="img-size">
     <img
      className="img-size"
      src="https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1280/720/81/media/disneyparksjapan-prod/disneyparksjapan_v0001/1/media/dlr/videos/disneyland/gallery/disneyland-gallery01.jpg"
      alt="Mickey tells an incredibly funny joke"
     />
       
     </Carousel.Item>
     <Carousel.Item className="img-size">
    <img
      className="img-size"
      src="https://images.unsplash.com/photo-1579566346927-c68383817a25?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      alt="storm troopers"
     />
     </Carousel.Item>
   </Carousel>
  );
}