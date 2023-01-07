import Footer from "./ui/patterns/Footer";
import Header from "./ui/patterns/Header";
import Hero from "./ui/patterns/Hero";

function App() {
  return (
    <div className='bg-gray-900 text-gray-200 min-h-screen flex flex-col'>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
