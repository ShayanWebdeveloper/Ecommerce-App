import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../Slider/Slider.css';
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper 
        navigation={true} 
        modules={[Navigation]} 
        className="mySwiper"
        spaceBetween={0} // No space between slides
        slidesPerView={1} // One slide at a time
        loop={true} // Infinite loop
        effect="fade" // Fade effect for smooth transition
        speed={1000} // Transition speed
      >
        <SwiperSlide>
          <div className="Slider_Photo">
            {/* Background Image for the first slide */}
         
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slider_Photo">
            {/* Background Image for the second slide */}
         
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slider_Photo">
            {/* Background Image for the third slide */}
           
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
