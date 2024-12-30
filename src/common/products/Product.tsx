import img1 from "@/assets/images/products/img1.jpg";
import { Button } from "@/components/ui/button";
function Product({
  product: {
    name = "California Maki",
    category = "Sushi",
    recipe = "Warm goats cheese and roasted vegetable salad with black olive tapenade crostini",
    price = 120,
    image = img1,
  },
}: {
  product: {
    name?: string;
    category?: string;
    recipe?: string;
    price?: number;
    image?: string;
  };
}) {
  return (
    <div className="group z-50 ">
      <div className="border border-border rounded-md group-hover:border-primary/50 z-50 group-hover:relative group-hover:duration-200 group-hover:transition-all group-hover:ease-in-out backdrop-blur-md group-hover:-translate-y-2 h-[550px] flex flex-col">
        <div>
          <img
            className="h-60 opacity-70 w-full object-cover rounded-t-md"
            src={image}
            alt=""
          />
        </div>
        <div className="py-6 px-4 flex flex-col grow">
          <div className="grow">
            <div className="flex items-center justify-between py-3">
              <h3 className="text-3xl font-semibold font-cormorant">{name}</h3>
              <p className="font-lato text-primary">${price}</p>
            </div>
            <div className="flex flex-col gap-3 mt-2">
              <p>
                <span> Category :</span>
                <span className="text-muted-foreground"> {category}</span>
              </p>
              <p>
                <span> Recipe :</span>
                <span className="text-muted-foreground"> {recipe}</span>
              </p>
            </div>
          </div>
          <div className="mt-6">
            <Button>Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
