import { Button } from "@/components/ui/button";

function Header() {
  return (
    <>
      <nav>
        <div className="flex justify-between items-center py-2 px-4 border-b border-border bg-black/20 backdrop-blur fixed z-50 w-full">
          <div>
            <h1 className="text-2xl font-bold">Savorly</h1>
          </div>
          <div>
            <ul className="flex items-center gap-4">
              <li>Home</li>
              <li>Menus</li>
              <li>Foods</li>
              <li>Contact Us</li>
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
