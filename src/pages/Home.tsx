import Discover from "@/components/home/discover-us/Discover";
import FeaturedCat from "@/components/home/featured-categories/FeaturedCat";
import Featured from "@/components/home/featured-products/Featured";
import Features from "@/components/home/features/Features";
import FromSheff from "@/components/home/from-sheff/FromSheff";
import CTA from "@/components/home/home-cta/CTA";
import Sliders from "@/components/home/slider/Sliders";

function Home() {
  return (
    <div className="mb-10">
      <Sliders />
      <Features />
      <FeaturedCat />
      <Discover />
      <Featured />
      <CTA />
      <FromSheff />
    </div>
  );
}

export default Home;
