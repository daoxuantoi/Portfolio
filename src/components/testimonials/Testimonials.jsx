import React from 'react'
import './testimonials.css'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


const Testimonials = () => {
  return (
    <section id="testimonials">
     
     <h5>Review from clients</h5>
     <h2>Testimonials</h2>
     <Swiper className="container testimonials_container"
     modules={[Pagination]}
     spaceBetween={40}
     slidesPerView={1}
     pagination={{ clickable: true}}
     >

       {/* initial swiper modules */}
       
       
       <SwiperSlide className="testimonial">
        <div className="client_avatar">
          <img src={AVTR1} alt="Avatar One"/>
          
        </div>
        <h5 className = "client_name">Dao Thi Huong</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laboriosam facilis dolores, possimus odio omnis cupiditate quia vel. Repellendus, nobis.
          </small>
       </SwiperSlide>
       
       <SwiperSlide className="testimonial">

        <div className="client_avatar">
          <img src={AVTR2} alt="Avatar One"/>
          
        </div>
        <h5 className = "client_name">Dao Xuan Toi</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laboriosam facilis dolores, possimus odio omnis cupiditate quia vel. Repellendus, nobis.
          </small>
       </SwiperSlide>
       <SwiperSlide className="testimonial">
        <div className="client_avatar">
          <img src={AVTR3} alt="Avatar One"/>
        </div>
        <h5 className = "client_name">Dao Xuan Tien</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laboriosam facilis dolores, possimus odio omnis cupiditate quia vel. Repellendus, nobis.
          </small>
       </SwiperSlide>
     </Swiper>
    </section>
  )
}


export default Testimonials
