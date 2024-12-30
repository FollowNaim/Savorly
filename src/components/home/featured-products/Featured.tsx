import Product from "@/common/products/Product";

function Featured() {
  const product = {
    _id: "642c155b2c4774f05c36eeb9",
    name: "Haddock",
    recipe:
      "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
    image:
      "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg",
    category: "drinks",
    price: 14.7,
  };
  return (
    <div className="bg-[#161211]">
      <div className="container px-4 py-10">
        <div>
          <p className="uppercase text-primary text-center font-lato tracking-widest">
            discovery our Products
          </p>
          <h2 className="mt-6 font-cormorant text-3xl font-bold text-center max-w-xl mx-auto">
            We Want To Bring Our customers The Best And Most Delicious Chocolate
            Products
          </h2>
        </div>
        <div className="mt-10">
          <div
            className="
          grid grid-cols-3 gap-4"
          >
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
