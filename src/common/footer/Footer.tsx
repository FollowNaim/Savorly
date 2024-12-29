function Footer() {
  return (
    <footer>
      <div className="container px-4 border-t py-10">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl text-primary">Savorly</h2>
          <ul className="flex items-center gap-4 text-muted-foreground">
            <li>Facebook</li>
            <li>Youtube</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8 justify-center items-center">
          <div>
            <h4 className="text-lg mb-2">Private Events</h4>
            <p className="text-muted-foreground">Call (212) 401-8000</p>
            <p className="text-muted-foreground">
              16 West 20nd St, New York, NY 10010
            </p>
          </div>
          <div>
            <h4 className="text-lg mb-2">Hours Open</h4>
            <p className="text-muted-foreground">Call (212) 401-8000</p>
            <p className="text-muted-foreground">
              16 West 20nd St, New York, NY 10010
            </p>
          </div>
          <div className="">
            <h4 className="text-lg mb-2">News Letter</h4>
            <p className="text-muted-foreground">Call (212) 401-8000</p>
            <p className="text-muted-foreground">
              16 West 20nd St, New York, NY 10010
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
