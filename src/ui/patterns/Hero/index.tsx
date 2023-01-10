import Form from "../Form";

function Hero() {
  return (
    <section className='bg-white py-12'>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold text-gray-800 mb-6 font-michroma'>
          Welcome to le.nez
        </h1>
        <Form />
        <p className='text-gray-600 mb-8 font-michroma'>
          Welcome to le.nez, your one stop destination for personalized
          fragrance recommendations. Our AI technology analyzes your preferences
          and provides recommendations tailored to your unique tastes. Whether
          you're looking for a new scent for work, a night out, or just to feel
          confident and sophisticated, le.nez has you covered. With a wide range
          of brands and scent types to choose from, you're sure to find the
          perfect fragrance for any occasion. So why wait? Start discovering
          your new favorite scent today with le.nez.
        </p>
        <div className='flex justify-center mb-8'>
          <a
            href='#'
            className='px-3 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800'
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
