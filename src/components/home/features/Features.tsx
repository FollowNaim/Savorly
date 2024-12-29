import img1 from "@/assets/images/features/organic.svg";
function Features() {
  return (
    <div className="my-20 font-cormorant">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 text-center">
        <div
          className="flex flex-col gap-4 border-r border-primary/60
        "
        >
          <img className="w-20 mx-auto" src={img1} alt="" />
          <h2 className="text-2xl font-bold">Natural Organic Product</h2>
          <p className="w-32 mx-auto border-b border-primary"></p>
          <p className="text-muted-foreground font-lato text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod dtem por incididunt ut labore et dolore.
          </p>
        </div>
        <div
          className="flex flex-col gap-4 border-r border-primary/60
        "
        >
          <img className="w-20 mx-auto" src={img1} alt="" />
          <h2 className="text-2xl font-bold">Best Quality Cocoa</h2>
          <p className="w-32 mx-auto border-b border-primary"></p>
          <p className="text-muted-foreground font-lato text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod dtem por incididunt ut labore et dolore.
          </p>
        </div>
        <div
          className="flex flex-col gap-4 border-r border-primary/60
        "
        >
          <img className="w-20 mx-auto" src={img1} alt="" />
          <h2 className="text-2xl font-bold">Customized Packing</h2>
          <p className="w-32 mx-auto border-b border-primary"></p>
          <p className="text-muted-foreground font-lato text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod dtem por incididunt ut labore et dolore.
          </p>
        </div>
        <div
          className="flex flex-col gap-4
        "
        >
          <img className="w-20 mx-auto" src={img1} alt="" />
          <h2 className="text-2xl font-bold">Best Quality Product</h2>
          <p className="w-32 mx-auto border-b border-primary"></p>
          <p className="text-muted-foreground font-lato text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod dtem por incididunt ut labore et dolore.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
