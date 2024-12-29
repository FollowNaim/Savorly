import Footer from "@/common/footer/Footer";
import Header from "@/common/header/Header";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className=" font-lora">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
