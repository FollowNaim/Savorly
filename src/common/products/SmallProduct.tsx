import img1 from "@/assets/images/products/img1.jpg";
function SmallProduct() {
  return (
    <div className="bg-white overflow-x-hidden">
      <div className="flex justify-between items-center pr-4">
        <div>
          <img
            className="w-36 h-28 object-cover relative -left-1/2 rounded-full"
            src={img1}
            alt=""
          />
        </div>
        <div className="text-black py-4">
          <h2 className="font-cormorant text-xl font-bold">
            ROASTED PORK BELLY
          </h2>
          <p className="text-background/60 font-lato mt-1">
            Roasted duck breast (served pink) with gratin potato and a griottine
            cherry sauce
          </p>
        </div>
        <div className="text-black pl-6">
          <p className="font-lato font-bold">$27</p>
        </div>
      </div>
    </div>
  );
}

export default SmallProduct;
