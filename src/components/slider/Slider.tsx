import { Button } from "../ui/button";
function Slider({
  img,
  title,
  subtitle,
}: {
  img: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className="flex flex-col justify-center items-center text-center py-20 gap-6 bg-black/30 bg-blend-overlay font-cormorant"
      style={{ backgroundImage: `url('${img}')` }}
    >
      <h2 className="text-6xl font-bold max-w-4xl leading-tight">{title}</h2>
      <p className="text-foreground/70 max-w-xl font-lora"> {subtitle}</p>
      <Button
        className="bg-transparent border border-primary font-lora mt-4"
        size={"lg"}
        variant={"outline"}
      >
        Read More
      </Button>
    </div>
  );
}

export default Slider;
