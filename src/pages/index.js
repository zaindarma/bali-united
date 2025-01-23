import Navbar1 from "@/components/organism/Navbar1";
import HomePage from "./home";
import Navbar2 from "@/components/organism/Navbar2";
import Footer from "@/components/organism/Footer";

export default function Home() {
  return (
    <>
    <Navbar1 />
    <Navbar2 />
    <div>
      <HomePage />
    </div>
    <Footer />
    </>
  );
}
