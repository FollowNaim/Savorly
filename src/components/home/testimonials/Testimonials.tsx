// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Testimonial from "./Testimonial";

export default function Testimonials() {
  return (
    <>
      <div className="bg-[#161211]">
        <div className="container px-4 py-10">
          <div>
            <p className="uppercase text-primary text-center font-lato tracking-widest">
              What our clients say
            </p>
            <h2 className="mt-6 font-cormorant text-3xl font-bold text-center max-w-xl mx-auto">
              We Want To Bring Our customers The Best And Most Delicious
              Chocolate Products
            </h2>
          </div>
          <div className="mt-10 max-w-2xl mx-auto">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Testimonial />
              </SwiperSlide>
              <SwiperSlide>
                <Testimonial />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
