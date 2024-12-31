import SmallProduct from "@/common/products/SmallProduct";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function FromSheff() {
  const { data } = useQuery({
    queryKey: ["from-sheff"],
    queryFn: () => axios.get("/dishes?category=offered&size=4"),
  });
  return (
    <div className="my-10">
      <div className="container px-4">
        <div>
          <p className="uppercase text-primary text-center font-lato tracking-widest">
            sheff recommends
          </p>
          <h2 className="mt-6 font-cormorant text-3xl font-bold text-center max-w-xl mx-auto">
            We Want To Bring Our customers The Best And Most Delicious Chocolate
            Products
          </h2>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-2 gap-4">
            {data?.data.map((item) => (
              <SmallProduct key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FromSheff;
