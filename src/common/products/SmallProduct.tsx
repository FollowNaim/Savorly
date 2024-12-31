function SmallProduct({
  item: { name, image, price, recipe },
}: {
  item: { name: string; image: string; price: number; recipe: string };
}) {
  return (
    <div className="bg-white overflow-x-hidden">
      <div className="flex justify-between items-center pr-4">
        <div>
          <img
            className="w-48 h-28 object-cover relative -left-1/2 rounded-full"
            src={image}
            alt=""
          />
        </div>
        <div className="text-black py-4">
          <h2 className="font-cormorant text-xl font-bold">{name}</h2>
          <p className="text-background/60 font-lato mt-1">{recipe}</p>
        </div>
        <div className="text-black pl-6">
          <p className="font-lato font-bold">${price}</p>
        </div>
      </div>
    </div>
  );
}

export default SmallProduct;
