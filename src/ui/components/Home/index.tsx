import Carousel from "../../patterns/Carousel";
import Footer from "../../patterns/Footer";
import Header from "../../patterns/Header";

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
