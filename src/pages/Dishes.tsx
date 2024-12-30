import Product from "@/common/products/Product";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
function Dishes() {
  const { data } = useQuery({
    queryKey: ["foods"],
    queryFn: () => axios.get("menu.json"),
  });
  const size = 6;
  const count = 57;
  const totalPages = Math.ceil(count / size);
  return (
    <div className="pt-20 pb-10">
      <div className="container px-4">
        <div className="mb-10">
          <p className="uppercase text-primary text-center font-lato tracking-widest">
            discovery our Dishes
          </p>
          <h2 className="mt-6 font-cormorant text-3xl font-bold text-center max-w-xl mx-auto">
            We Want To Bring Our customers The Best And Most Delicious Chocolate
            Products
          </h2>
        </div>
        <div className="mb-10 font-lato flex justify-between items-center">
          <div className="flex-1">
            <Input className="max-w-xs" placeholder="Search your dishes" />
          </div>
          <div className="flex-1">
            <div className="ml-auto w-fit">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {data?.data.map((item) => (
            <Product product={item} key={item._id} />
          ))}
        </div>
        <div className="flex items-center justify-center gap-6 mt-6">
          {[...Array(totalPages).keys()].map((page) => (
            <p className="bg-yellow-100/20 px-4 text-white">{page}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dishes;
