import Carousel from "./ui/patterns/Carousel";
import Footer from "./ui/patterns/Footer";
import Header from "./ui/patterns/Header";

function Home() {
  return (
    <div className='bg-gray-900 text-gray-200 min-h-screen flex flex-col'>
      <Header />
      <Carousel />
      <Footer />
    </div>
  );
}

export default Home;
