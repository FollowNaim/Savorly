import img1 from "@/assets/images/discover-us/img1.jpg";
import img2 from "@/assets/images/discover-us/img2.jpg";
import img3 from "@/assets/images/discover-us/img3.jpg";
import img4 from "@/assets/images/discover-us/img4.jpg";
import img5 from "@/assets/images/discover-us/img5.jpg";
import sign from "@/assets/images/discover-us/sign.png";
import { Button } from "@/components/ui/button";
function Discover() {
  return (
    <div className="mt-10 mb-20 py-10">
      <div className="container">
        <div>
          <p className="uppercase text-primary text-center font-lato tracking-widest">
            discovery our categories
          </p>
          <h2 className="mt-6 font-cormorant text-3xl font-bold text-center max-w-xl mx-auto">
            We Want To Bring Our customers The Best And Most Delicious Chocolate
            Products
          </h2>
        </div>
        <div className="flex justify-center items-center mt-6">
          <p className="border-r border-primary/80 h-16 w-1 text-center"></p>
        </div>
        <div className="grid grid-cols-2 gap-14 justify-center items-center">
          <div
            className="bg-no-repeat bg-cover w-full h-full relative"
            style={{ backgroundImage: `url('${img1}')` }}
          >
            <img
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 object-cover z-20"
              src={img2}
              alt=""
            />
            <img
              className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 object-cover"
              src={img3}
              alt=""
            />
          </div>
          <div className="pr-10 flex flex-col gap-6 py-10">
            <h2 className="text-4xl leading-tight font-bold font-cormorant">
              Chocolate For the Soul. Sweeten Up your Day With Chocolate!
            </h2>
            <div className="font-lato text-muted-foreground">
              <p className="">
                Cras vitae ornare nunc, vitae tempus eros. Donec mi libero,
                eleifend at laoreet id, convallis nec nunc. Proin consequat
                mattis nisl ut blandit. Nunc pellentesque bibendum urna.,
                imperdiet
              </p>
              <p className="mt-3">
                lacinia lorem molestie ac. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut a liquip ex ea commodo
                consequat. Duis aute irure dolor
              </p>
            </div>
            <Button className="w-fit mt-4" size={"lg"}>
              Read More
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-14 mt-32 justify-center items-center">
          <div className="pl-10 flex flex-col gap-6 py-20">
            <h2 className="text-4xl leading-tight font-bold font-cormorant">
              Chocolate For the Soul. Sweeten Up your Day With Chocolate!
            </h2>
            <div className="font-lato text-muted-foreground">
              <p className="">
                Cras vitae ornare nunc, vitae tempus eros. Donec mi libero,
                eleifend at laoreet id, convallis nec nunc. Proin consequat
                mattis nisl ut blandit. Nunc pellentesque bibendum urna.,
                imperdiet
              </p>
              <p className="mt-3">
                lacinia lorem molestie ac. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut a liquip ex ea commodo
                consequat. Duis aute irure dolor
              </p>
            </div>
            <Button className="w-fit mt-4" size={"lg"}>
              Read More
            </Button>
          </div>
          <div
            className="bg-no-repeat bg-cover w-full h-full relative"
            style={{ backgroundImage: `url('${img4}')` }}
          >
            <div className="absolute right-10 -top-10 w-52 h-72  bg-[#181818] p-4 rounded-md">
              <div className="border border-primary/60 rounded-md w-full h-full flex flex-col justify-center items-center">
                <img
                  className=" rounded-full mt-4 object-cover z-20"
                  src={img5}
                  alt=""
                />
                <h4 className="font-cormorant text-xl font-semibold mt-2">
                  Chef. George Ryan
                </h4>
                <p className="text-muted-foreground text-sm font-lato mt-2">
                  Founder of Store
                </p>
                <img className="w-12 mt-3" src={sign} alt="" />
              </div>
            </div>
            {/* <img
              className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 object-cover"
              src={img5}
              alt=""
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
