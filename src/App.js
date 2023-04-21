import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import FirstSection from "./components/sections/section-1/FirstSection";
import SecondSection from "./components/sections/section-2/SecondSection";
import ThirdSection from "./components/sections/section-3/ThirdSection";
import FourthSection from "./components/sections/section-4/FourthSection";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </>
  );
}

export default App;
