import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./MainSlider.scss";
import FirstSlide from "./img/first_slide.jpg";
import SecondSlide from "./img/second_slide.jpg";
import ThirdSlide from "./img/third_slide.jpg";
import FourthSlide from "./img/fourth_slide.jpg";

function MainSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      className="main_slider"
      slidesPerView={1}
      autoplay={{ delay: 5000, desableOnInteraction: false }}
    >
      <SwiperSlide>
        <img src={FirstSlide} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={SecondSlide} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ThirdSlide} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={FourthSlide} />
      </SwiperSlide>
    </Swiper>
  );
}

export default MainSlider;
