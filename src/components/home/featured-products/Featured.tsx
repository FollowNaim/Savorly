import Product from "@/common/products/Product";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Featured() {
  const { data } = useQuery({
    queryKey: ["popular"],
    queryFn: () => axios.get("/dishes?category=popular&size=3"),
  });
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
            {data?.data.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
