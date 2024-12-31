import Loader from "@/common/loader/Loader";
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
import { useState } from "react";
function Dishes() {
  const [page, setPage] = useState(0);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const size = 6;
  const { data, isLoading } = useQuery({
    queryKey: ["foods", { page, category, search }],
    queryFn: () =>
      axios.get(
        `/dishes?category=${category}&page=${page}&size=${size}&search=${search}`
      ),
  });
  const { data: searchCount } = useQuery({
    queryKey: [search],
    queryFn: () =>
      axios.get(`/dishes?searchCount=${search ? "true" : ""}&search=${search}`),
  });
  const { data: countData } = useQuery({
    queryKey: ["count"],
    queryFn: () => axios.get("/dishes?count=true"),
  });
  const { data: categoryCount } = useQuery({
    queryKey: [category],
    queryFn: () => axios.get(`/dishes?categoryCount=${category}`),
  });
  const totalPages = Math.ceil(
    (search
      ? searchCount?.data.searchCount
      : categoryCount?.data?.categoryCount
      ? categoryCount?.data?.categoryCount
      : countData?.data?.count) / size
  );
  // console.log(categoryCount?.data?.categoryCount || );
  console.log(totalPages);
  if (isLoading && !search) return <Loader />;
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
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="max-w-xs"
              placeholder="Search your dishes"
            />
          </div>
          <div className="flex-1">
            <div className="ml-auto w-fit">
              <Select
                value={category}
                onValueChange={(value) => {
                  setCategory(value);
                  setSearch("");
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                    <SelectItem value="popular">Popular</SelectItem>
                    <SelectItem value="offered">Offered</SelectItem>
                    <SelectItem value="salad">Salad</SelectItem>
                    <SelectItem value="drinks">Drinks</SelectItem>
                    <SelectItem value="dessert">Dessert</SelectItem>
                    <SelectItem value="pizza">Pizza</SelectItem>
                    <SelectItem value="soup">Soup</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {data?.data.length === 0
            ? "No data found"
            : data?.data.map((item) => (
                <Product product={item} key={item._id} />
              ))}
        </div>
        <div
          id="pagination"
          className="flex items-center justify-center gap-6 mt-6"
        >
          {[...Array(totalPages ? totalPages : 0).keys()].map((pageNumber) => (
            <p
              onClick={() => setPage(pageNumber)}
              className={`bg-muted px-4 cursor-pointer font-lato py-1 rounded-md  text-white hover:bg-[#c7ac8593] ${
                page === pageNumber ? "active" : ""
              }`}
            >
              {pageNumber + 1}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dishes;
