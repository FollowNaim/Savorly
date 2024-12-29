import Discover from "@/components/home/discover-us/Discover";
import FeaturedCat from "@/components/home/featured-categories/FeaturedCat";
import Features from "@/components/home/features/Features";
import Sliders from "@/components/home/slider/Sliders";

function Home() {
  return (
    <div className="mb-10">
      <Sliders />
      <Features />
      <FeaturedCat />
      <Discover />
    </div>
  );
}

export default Home;
