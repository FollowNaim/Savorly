import img1 from "@/assets/images/products/img1.jpg";
import { Button } from "@/components/ui/button";
function Product() {
  return (
    <div className="border border-border rounded-md">
      <div>
        <img className="h-60 w-full object-cover" src={img1} alt="" />
      </div>
      <div className="py-6 px-4">
        <div className="flex items-center justify-between py-3">
          <h3 className="text-3xl font-semibold font-cormorant">
            California Maki
          </h3>
          <p className="font-lato text-primary">$120</p>
        </div>
        <div className="flex flex-col gap-3">
          <p>
            <span> Category :</span>
            <span className="text-muted-foreground"> Sushi</span>
          </p>
          <p>
            <span> Recipe :</span>
            <span className="text-muted-foreground">
              {" "}
              Warm goats cheese and roasted vegetable salad with black olive
              tapenade crostini
            </span>
          </p>
        </div>
        <div className="mt-6">
          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  );
}

export default Product;
