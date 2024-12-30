import cta from "@/assets/images/products/cta.jpg";
import { Button } from "@/components/ui/button";
function CTA() {
  return (
    <div
      className="py-20 my-10 flex flex-col justify-center bg-no-repeat bg-cover bg-black/50 bg-blend-overlay items-center"
      style={{ backgroundImage: `url("${cta}")` }}
    >
      <h2
        className="
      text-4xl font-cormorant text-center max-w-xl leading-tight font-bold"
      >
        Explore The Fall Product Catalog New Seasonal, New Products
      </h2>
      <Button
        className="mt-6 uppercase bg-transparent border-primary"
        variant={"outline"}
      >
        Discovery Now
      </Button>
    </div>
  );
}

export default CTA;
