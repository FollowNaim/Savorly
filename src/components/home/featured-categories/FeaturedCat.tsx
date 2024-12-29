import topleft from "@/assets/images/featured-cat/featured-cat.png";
import Category from "./Category";
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
      </div>
    </div>
  );
}

export default FeaturedCat;
