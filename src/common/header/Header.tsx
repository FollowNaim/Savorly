import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <div className="flex justify-between items-center py-2 px-4 border-b border-border bg-black/20 backdrop-blur fixed z-[999] w-full">
          <div>
            <Link to={"/"}>
              <h1 className="text-2xl font-bold">Savorly</h1>
            </Link>
          </div>
          <div>
            <ul id="navlinks" className="flex items-center gap-6">
              <NavLink to={"/"}>
                <li className="text-muted-foreground">Home</li>
              </NavLink>
              <NavLink to={"/dishes"}>
                <li className="text-muted-foreground">Our Dishes</li>
              </NavLink>
              <li className="text-muted-foreground">Foods</li>
              <li className="text-muted-foreground">Contact Us</li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <Button variant={"ghost"}>Login</Button>
            <Button>Register</Button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
