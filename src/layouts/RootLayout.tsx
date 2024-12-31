import Footer from "@/common/footer/Footer";
import Header from "@/common/header/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";

function RootLayout() {
  return (
    <div className=" font-lora">
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
