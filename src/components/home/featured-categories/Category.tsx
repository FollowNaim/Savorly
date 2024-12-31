import steak from "@/assets/images/featured-cat/steak.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
function Category({ name, subtitle }: { name: string; subtitle: string }) {
  return (
    <div className="group z-50">
      <div
        id="cat"
        className="border border-border rounded-md p-4 flex flex-col gap-4 group-hover:border-primary/50 z-50 group-hover:relative group-hover:duration-200 group-hover:transition-all group-hover:ease-in-out backdrop-blur-md"
      >
        {/* <div className="group-hover:absolute -z-50 w-full h-full bg-primary/5 group-hover:transition-all group-hover:ease-in-out group-hover:duration-200 blur-3xl"></div> */}
        <img className="w-12" src={steak} alt="" />
        <h2 className="text-2xl font-semibold font-cormorant group-hover:text-primary">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h2>
        <p className="text-muted-foreground font-lato text-sm">{subtitle}</p>
        <Link to={`/dishes/${name}`}>
          <Button
            className="mt-4 bg-transparent group-hover:bg-primary group-hover:text-black"
            variant={"outline"}
          >
            View Menu
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Category;
