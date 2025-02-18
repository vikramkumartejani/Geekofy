import Header from "./components/Header";
import Footer from "./components/Footer";
import ServicesBox from "./components/ServicesBox";
import Logo from "./components/Logo";
import Filters from "./components/Filters";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="md:block hidden">
        <Logo />
      </div>
      <Filters />
      <div className="md:block hidden">
        <ServicesBox />
      </div>
      <Footer />
    </div>
  );
}
