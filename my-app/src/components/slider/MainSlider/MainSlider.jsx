import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./mainSlider.scss";
import FirstSlide from "./img/first_slide.jpg";
import SecondSlide from "./img/second_slide.jpg";
import ThirdSlide from "./img/third_slide.jpg";
import FourthSlide from "./img/fourth_slide.jpg";
import FirstSlideMin from "./img/first_slide_min.jpg";
import SecondSlideMin from "./img/second_slide_min.jpg";
import ThirdSlideMin from "./img/third_slide_min.jpg";
import FourthSlideMin from "./img/fourth_slide_min.jpg";

function MainSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      className="main_slider"
      slidesPerView={1}
      autoplay={{ delay: 5000, desableOnInteraction: false }}
    >
      <SwiperSlide>
        <picture>
          <source media="(max-width: 900px)" srcSet={FirstSlideMin} />
          <img src={FirstSlide} />
        </picture>
      </SwiperSlide>
      <SwiperSlide>
        <picture>
          <source media="(max-width: 900px)" srcSet={SecondSlideMin} />
          <img src={SecondSlide} />
        </picture>
      </SwiperSlide>
      <SwiperSlide>
        <picture>
          <source media="(max-width: 900px)" srcSet={ThirdSlideMin} />
          <img src={ThirdSlide} />
        </picture>
      </SwiperSlide>
      <SwiperSlide>
        <picture>
          <source media="(max-width: 900px)" srcSet={FourthSlideMin} />
          <img src={FourthSlide} />
        </picture>
      </SwiperSlide>
    </Swiper>
  );
}

export default MainSlider;
