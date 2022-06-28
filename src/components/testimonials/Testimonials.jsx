import React from 'react'
import './testimonials.css'
import IMG7 from '../../assets/backgroundpic.jpg'
import IMG8 from '../../assets/eightpic.jpg'
import IMG9 from '../../assets/ninth.jpg'

import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container tesimonials__container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>

        <SwiperSlide className="testimonials">
          <div className="client__pics">
            <img src={IMG7} alt="seventh pic" />
            </div>
            <h5 className="client__name">Linda Philip</h5>
            <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Repellat debitis vero repellendus, reiciendis doloribus similique rem dolorem 
            et optio pariatur facere maiores ad eos possimus odio exercitationem ipsam? Cum, soluta!
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonials">
          <div className="client__pics">
            <img src={IMG8} alt="eight pic" />
            </div>
            <h5 className="client__name">Jindu Eshio</h5>
            <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Repellat debitis vero repellendus, reiciendis doloribus similique rem dolorem 
            et optio pariatur facere maiores ad eos possimus odio exercitationem ipsam? Cum, soluta!
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonials">
          <div className="client__pics">
            <img src={IMG9} alt="ninth pic" />
            </div>
            <h5 className="client__name">Hyiacinth Greg</h5>
            <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Repellat debitis vero repellendus, reiciendis doloribus similique rem dolorem 
            et optio pariatur facere maiores ad eos possimus odio exercitationem ipsam? Cum, soluta!
            </small>
        </SwiperSlide>
      </Swiper>
      </section>
  )
}

export default Testimonials