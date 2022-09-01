import React from 'react'
import './skills.css'
import IMG7 from '../../assets/backgroundpic.jpg'
import IMG8 from '../../assets/eightpic.jpg'
import IMG9 from '../../assets/ninth.jpg'

import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Skills = () => {
  return (
    <section id='skills'>
      <h5>Personal Traits</h5>
      <h2>Skills</h2>

      <Swiper className="container skills__container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>

        <SwiperSlide className="skills">
          <div className="client__pics">
            <img src={IMG7} alt="seventh pic" />
            </div>
            <h5 className="client__name">Creative and Innovative</h5>
            <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Repellat debitis vero repellendus, reiciendis doloribus similique rem dolorem 
            et optio pariatur facere maiores ad eos possimus odio exercitationem ipsam? Cum, soluta!
            </small>
        </SwiperSlide>

        <SwiperSlide className="skills">
          <div className="client__pics">
            <img src={IMG9} alt="ninth pic" />
            </div>
            <h5 className="client__name">Agile Leadership</h5>
            <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Repellat debitis vero repellendus, reiciendis doloribus similique rem dolorem 
            et optio pariatur facere maiores ad eos possimus odio exercitationem ipsam? Cum, soluta!
            </small>
        </SwiperSlide>

        <SwiperSlide className="skills">
          <div className="client__pics">
            <img src={IMG8} alt="eight pic" />
            </div>
            <h5 className="client__name">Data Driven</h5>
            <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Repellat debitis vero repellendus, reiciendis doloribus similique rem dolorem 
            et optio pariatur facere maiores ad eos possimus odio exercitationem ipsam? Cum, soluta!
            </small>
        </SwiperSlide>

        <SwiperSlide className="skills">
          <div className="client__pics">
            <img src={IMG9} alt="ninth pic" />
            </div>
            <h5 className="client__name">Business Management</h5>
            <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Repellat debitis vero repellendus, reiciendis doloribus similique rem dolorem 
            et optio pariatur facere maiores ad eos possimus odio exercitationem ipsam? Cum, soluta!
            </small>
        </SwiperSlide>

        <SwiperSlide className="skills">
          <div className="client__pics">
            <img src={IMG9} alt="ninth pic" />
            </div>
            <h5 className="client__name">Design Thinking</h5>
            <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Repellat debitis vero repellendus, reiciendis doloribus similique rem dolorem 
            et optio pariatur facere maiores ad eos possimus odio exercitationem ipsam? Cum, soluta!
            </small>
        </SwiperSlide>

        <SwiperSlide className="skills">
          <div className="client__pics">
            <img src={IMG9} alt="ninth pic" />
            </div>
            <h5 className="client__name">Problem Solving and Goal Oriented</h5>
            <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Repellat debitis vero repellendus, reiciendis doloribus similique rem dolorem 
            et optio pariatur facere maiores ad eos possimus odio exercitationem ipsam? Cum, soluta!
            </small>
        </SwiperSlide>
      </Swiper>
      </section>
  )
}

export default Skills