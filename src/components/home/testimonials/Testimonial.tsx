import { FaQuoteLeft } from "react-icons/fa";

function Testimonial() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center px-24 pb-20">
        <div className="py-4">
          <FaQuoteLeft size={22} />
        </div>
        <div>
          <p className="text-muted-foreground font-lato">
            Various version have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like). It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </p>
          <h2 className="mt-6 text-xl text-primary font-bold">Jon Doe</h2>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
