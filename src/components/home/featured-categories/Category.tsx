import steak from "@/assets/images/featured-cat/steak.png";
import { Button } from "@/components/ui/button";
function Category() {
  return (
    <div className="group z-50">
      <div className="border border-border rounded-md p-4 flex flex-col gap-4 group-hover:border-primary/50 z-50 group-hover:relative group-hover:duration-200 group-hover:transition-all group-hover:ease-in-out backdrop-blur-md group-hover:-translate-y-2">
        {/* <div className="group-hover:absolute -z-50 w-full h-full bg-primary/5 group-hover:transition-all group-hover:ease-in-out group-hover:duration-200 blur-3xl"></div> */}
        <img className="w-12" src={steak} alt="" />
        <h2 className="text-2xl font-semibold font-cormorant group-hover:text-primary">
          Steak Menu
        </h2>
        <p className="text-muted-foreground font-lato text-sm">
          Our menu mirrors the restaurant’s design in marrying inspiration from
          old school butcher shops
        </p>
        <Button
          className="mt-4 bg-transparent group-hover:bg-primary group-hover:text-black"
          variant={"outline"}
        >
          View Menu
        </Button>
      </div>
    </div>
  );
}

export default Category;
