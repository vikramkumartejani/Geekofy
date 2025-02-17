import Header from "./components/Header";
import Footer from "./components/Footer";
import ServicesBox from "./components/ServicesBox";
import Logo from "./components/Logo";
import Filters from "./components/Filters";

export default function Home() {
  return (
    <div>
      <Header />
      <Logo/>
      <Filters/>
      <ServicesBox/>
      <Footer />
    </div>
  );
}
