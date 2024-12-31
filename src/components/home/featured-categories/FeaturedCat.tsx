import topleft from "@/assets/images/featured-cat/featured-cat.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Category from "./Category";
import "./Featured.css";
function FeaturedCat() {
  return (
    <div className="bg-[#161211] relative py-20 overflow-hidden">
      <img
        className="absolute bg-no-repeat left-0 top-0"
        src={topleft}
        alt=""
      />
      <div className="container px-4">
        <div>
          <p className="uppercase text-primary text-center font-lato tracking-widest">
            discovery our categories
          </p>
          <h2 className="mt-6 font-cormorant text-3xl font-bold text-center max-w-xl mx-auto">
            We Want To Bring Our customers The Best And Most Delicious Chocolate
            Products
          </h2>
        </div>
        <div className="flex justify-center items-center mt-6">
          <p className="border-r border-primary/80 h-16 w-1 text-center"></p>
        </div>
        <div id="featured" className="mt-10">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Category
                name={"popular"}
                subtitle={
                  "Our menu mirrors the restaurant’s design in marrying inspiration from old school butcher shops"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Category
                name={"offered"}
                subtitle={
                  "Our menu mirrors the restaurant’s design in marrying inspiration from old school butcher shops"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Category
                name={"pizza"}
                subtitle={
                  "Our menu mirrors the restaurant’s design in marrying inspiration from old school butcher shops"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Category
                name={"salad"}
                subtitle={
                  "Our menu mirrors the restaurant’s design in marrying inspiration from old school butcher shops"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Category
                name={"dessert"}
                subtitle={
                  "Our menu mirrors the restaurant’s design in marrying inspiration from old school butcher shops"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Category
                name={"soup"}
                subtitle={
                  "Our menu mirrors the restaurant’s design in marrying inspiration from old school butcher shops"
                }
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCat;
