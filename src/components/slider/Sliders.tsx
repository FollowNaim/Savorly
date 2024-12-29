import slide1 from "@/assets/images/sliders/slide1.jpg";
import slide2 from "@/assets/images/sliders/slide2.jpg";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "./Slider";
function Sliders() {
  return (
    <div className="pt-10">
      <Swiper navigation={true} modules={[Navigation]}>
        <SwiperSlide>
          <Slider
            img={slide1}
            title={" A Sweet Moment The Lighter Way To Enjoy Chocolate"}
            subtitle={
              "We cook everything in our kettle or copper pot, cut and coat by hand, and package fresh for sale to you."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            img={slide2}
            title={" Making Moments Specials Add More Happiness"}
            subtitle={
              " We cook everything in our kettle or copper pot, cut and coat by hand, and package fresh for sale to you."
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Sliders;
