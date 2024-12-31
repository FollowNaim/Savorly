import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";

import "@smastrom/react-rating/style.css";
function Testimonial({
  review: { name, details, rating },
}: {
  review: { name: string; details: string; rating: number };
}) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center px-24 pb-20">
        <div className="mb-4">
          <Rating style={{ maxWidth: 100 }} readOnly={true} value={rating} />
        </div>
        <div className="py-4">
          <FaQuoteLeft size={22} />
        </div>
        <div>
          <p className="text-muted-foreground font-lato">{details}</p>
          <h2 className="mt-6 text-xl text-primary font-bold">{name}</h2>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
