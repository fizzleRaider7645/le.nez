import { FormattedMessage } from "react-intl";
import routes from "../../../const/router/routes";
import Form from "../Form";

function Hero() {
  return (
    <section className='bg-white py-8 w-full'>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold text-gray-800 mb-6 font-michroma'>
          <FormattedMessage id='welcome' />
        </h1>
        <Form />
        <p className='text-gray-600 mb-8 font-michroma'>
          <FormattedMessage id='mainContent' />
        </p>
        <div className='flex justify-center mb-8'>
          <a
            href={routes.HOME}
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
